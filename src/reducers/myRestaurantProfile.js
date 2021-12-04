import profileJSON from './data/myRestaurantProfile.json'


const myRestaurantProfile = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-myRestaurant-profile':
            return(action.RestaurantProfile);
            break;

        case 'update-myRestaurant-profile':
            const newState = [action.RestaurantProfile];
            return newState;
            break;

        case 'delete-my-restaurant':
            return (
                state.filter(restaurant => restaurant._id !== action.RestaurantProfile._id)
            )
            break;

        default:
            return state;
    }

};



export default myRestaurantProfile;