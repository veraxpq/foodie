//const PROFILE_API = 'https://my-node-on-heroku.herokuapp.com/api/profile';
//const PROFILE_API = 'http://localhost:4000/api/profile';
const PROFILE_API = 'http://localhost:5000/rest/my_restaurant_profile';

export const fetchAllRestaurantProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(RestaurantProfile =>
                  dispatch({
                               type: 'fetch-all-myRestaurant-profile',
                               RestaurantProfile
                           })
        );

export const updateCurrentRestaurantProfile = (dispatch, RestaurantProfile) =>
    fetch(`${PROFILE_API}/${RestaurantProfile._id}`, {
        method: 'PUT',
        body: JSON.stringify(RestaurantProfile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response =>
                dispatch({
                             type: 'update-myRestaurant-profile',
                             RestaurantProfile
                         }));