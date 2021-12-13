const RESTAURANT_API = 'https://foodie-mysql-database.herokuapp.com/foodie/restaurantsService';
const USER_API = "https://foodie-mysql-database.herokuapp.com/foodie/createUser";

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
        .then(response => response.json())
