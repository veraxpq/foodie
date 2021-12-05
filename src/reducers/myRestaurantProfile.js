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

        case 'create-new-restaurant':
            const restaurant = {
                _id: (new Date()).getTime() + '',
                "rating": 0,
                "image_url": "/images/restaurant1.png",
                ...action.restaurant
            };
            return ([
                restaurant,
                ...state,
            ]);

        default:
            return state;
    }

};



export default myRestaurantProfile;