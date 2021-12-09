const API = 'https://foodie-mysql-database.herokuapp.com';

export const getRestaurantByLocation = (dispatch, location) =>{
    fetch(`${API}/getRestaurantByLocation?cityName=${location}`)
        .then(response => response.json())
        .then(restaurants =>
            dispatch({
                type: 'fetch-all-restaurants-by-location',
                restaurants
            })
        );
}

export const getRestaurantByTermAndLocation = (dispatch,term, location) =>
    fetch(`${API}/getRestaurantByTermAndLocation`, {
        method:'POST',
        body: JSON.stringify({
            "location": location,
            "term": [term]}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(restaurants =>
            dispatch({
                type: 'fetch-all-restaurants-by-term-and-location',
                restaurants
            })
        );