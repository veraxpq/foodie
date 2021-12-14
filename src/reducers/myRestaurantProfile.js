import profileJSON from './data/myRestaurantProfile.json'


const myRestaurantProfile = (state = profileJSON, action) => {
    console.log("myRestaurantProfile state",state)
    switch (action.type) {
        case 'fetch-all-myRestaurant-profile':
            console.log("fetch-all-myRestaurant-profile state",action.RestaurantProfile)
            return(action.RestaurantProfile);
            break;

        case 'update-myRestaurant-profile':
            const newState = [action.RestaurantProfile];
            return newState;
            break;

        case 'delete-my-restaurant':
            return (
                {...state, "data": state.data.filter(restaurant => restaurant.id !== action.RestaurantProfile.id)
                }
            )
            break;

        case 'create-new-restaurant':
            state.data.push(action.restaurant);
            return (state);

        default:
            return state;
    }

};



export default myRestaurantProfile;