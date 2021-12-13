import profileJSON from './data/myRestaurantProfile.json'


const myRestaurantProfile = (state = profileJSON, action) => {
    console.log("myRestaurantProfile state",state)
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
                {...state, "data": state.data.filter(restaurant => restaurant.id !== action.RestaurantProfile.id)
                }
            )
            break;

        case 'create-new-restaurant':
            // const restaurant = {
            //     //id: (new Date()).getTime() + '',
            //     "rating": 2,
            //     "imageUrl": "/images/restaurant1.png", //need update
            //     "userid": 585,
            //     "price":"$$",
            //     ...action.name,
            // };
            // const name=action.name;
            // console.log("post new restaurant",restaurant);
            // console.log("post new name",name);
            //console.log("name",restaurant.name);
            return (
                {...state,
                    "data":[action.restaurant, ...state.data]
                }
                // {...state,
                //     "data":state.data.push(restaurant)
                // }
            );

        default:
            return state;
    }

};



export default myRestaurantProfile;