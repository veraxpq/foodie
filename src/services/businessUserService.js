const USER_API = 'https://foodie-mysql-database.herokuapp.com/foodie/createNewBusinessUser';
//const USER_API = "http://localhost:18081/foodie/createNewBusinessUser";

// export const fetchAllRestaurants = (dispatch) =>
//     fetch(RESTAURANT_API)
//         .then(response => response.json())
//         .then(restaurants =>
//                   dispatch({
//                                type: 'fetch-all-restaurants',
//                                restaurants
//                            })
//         );

export const createNewBusinessUser = (dispatch, user) =>
    fetch(USER_API, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(() => {
            dispatch({
                         type: 'create-user',
                         user
                     })
        })

// export const createNewRestaurant = (dispatch, restaurant) =>
//     fetch(RESTAURANT_API, {
//         method: 'POST',
//         body: JSON.stringify(restaurant),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//         .then(() => {
//             dispatch({
//                          type: 'create-restaurant',
//                          restaurant
//                      })
//         })