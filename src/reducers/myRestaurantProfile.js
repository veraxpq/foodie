import profileJSON from './data/myRestaurantProfile.json'


const myRestaurantProfile = (state = profileJSON, action) => {
    //action.preventDefault();
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
                {...state, data: state.data.filter(restaurant => restaurant._id !== action.RestaurantProfile._id)
                }
            )
            break;

        case 'create-new-restaurant':
            const restaurant = {
                _id: (new Date()).getTime() + '',
                "rating": 2,
                "image_url": "/images/restaurant1.png", //need update
                "userid": 5,
                ...action.name,
            };
            // const name=action.name;
            // console.log("post new restaurant",restaurant);
            // console.log("post new name",name);
            return (
                {...state,
                    data:[restaurant, ...state.data]
                }
            );

        default:
            return state;
    }

};



export default myRestaurantProfile;