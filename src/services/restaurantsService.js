const RESTAURANT_API = 'http://localhost:5000/rest/restaurantsService';

export const fetchAllRestaurants = (dispatch) =>
    fetch(RESTAURANT_API)
        .then(response => response.json())
        .then(restaurants =>
            dispatch({
                type: 'fetch-all-restaurants',
                restaurants
            })
        );

