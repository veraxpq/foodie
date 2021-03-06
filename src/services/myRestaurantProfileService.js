const PROFILE_API = "https://foodie-mysql-database.herokuapp.com";
//const PROFILE_API = 'http://localhost:18081/getRestaurant?cityName=sanjose';
//const PROFILE_API = 'http://localhost:5000/rest/my_restaurant_profile';

export const fetchAllRestaurantProfile = (dispatch, userId,token) =>
    fetch(`${PROFILE_API}/foodie/getRestaurantByUserId?id=${userId}`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization':`${token}`
        }
    })
        .then(response => response.json())
        .then(RestaurantProfile =>
                  dispatch({
                               type: 'fetch-all-myRestaurant-profile',
                               RestaurantProfile
                           })
        );

export const updateCurrentRestaurantProfile = (dispatch, RestaurantProfile) =>
    fetch(`${PROFILE_API}/foodie/updateRestaurantByRestaurantId?id=${RestaurantProfile.id}`, {
        method: 'POST',
        body: JSON.stringify(RestaurantProfile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response =>
                dispatch({
                             type: 'update-myRestaurant-profile',
                             RestaurantProfile
                         }));

export const deleteMyRestaurant = (dispatch, RestaurantProfile,token) =>
    fetch(`${PROFILE_API}/foodie/deleteRestaurantByRestaurantId?restaurantId=${RestaurantProfile.id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'authorization':`${token}`
        }
    }).then(response => dispatch({
                                     type: 'delete-my-restaurant',
                                         RestaurantProfile
                                 }));

export const postNewRestaurant = (dispatch, restaurant,token) =>
    //restaurant.preventDefault();
    fetch(`${PROFILE_API}/foodie/postRestaurant`, {
      method: 'POST',
      body: JSON.stringify(restaurant),
      headers: {
        'content-type': 'application/json',
        'authorization':`${token}`
      }
    })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: 'create-new-restaurant',
        restaurant
      })
    });
