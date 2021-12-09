const PROFILE_API = "https://foodie-mysql-database.herokuapp.com/";
//const PROFILE_API = 'http://localhost:18081/getRestaurant?cityName=sanjose';
//const PROFILE_API = 'http://localhost:5000/rest/my_restaurant_profile';

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

export const deleteMyRestaurant = (dispatch, RestaurantProfile) =>
    fetch(`${PROFILE_API}/${RestaurantProfile._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
                                     type: 'delete-my-restaurant',
                                         RestaurantProfile
                                 }));

export const postNewRestaurant = (dispatch, newRestaurant) =>
    fetch(PROFILE_API, {
      method: 'POST',
      body: JSON.stringify(newRestaurant),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(RestaurantProfile =>
        dispatch({
          type: 'create-new-restaurant',
          RestaurantProfile
        })
    );
