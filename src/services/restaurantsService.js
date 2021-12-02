const RESTAURANT_API = 'http://localhost:5000/rest/restaurantsService';
const USER_API = "http://localhost:18081/foodie/createUser";

export const fetchAllRestaurants = (dispatch) =>
    fetch(RESTAURANT_API)
        .then(response => response.json())
        .then(restaurants =>
            dispatch({
                type: 'fetch-all-restaurants',
                restaurants
            })
        );

export const createNewUser = (dispatch, user) =>
    fetch(USER_API, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(() => {
            console.log("postsdddddddddddd")
            dispatch({
                type: 'create-user',
                user
            })
        })
