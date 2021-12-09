
export const getRestaurantByLocation = (dispatch, location) =>
    fetch(`localhost:18081/getRestaurantByLocation?cityName=${location}&term=restaurants`)
        .then(response => response.json())
        .then(restaurants =>
            dispatch({
                type: 'fetch-all-restaurants-by-location',
                restaurants
            })
        );

export const getRestaurantByTermAndLocation = (dispatch, term, location) =>
    fetch(`localhost:18081/getRestaurantByLocation?cityName=${location}&term=${term}`)
        .then(response => response.json())
        .then(restaurants =>
            dispatch({
                type: 'fetch-all-restaurants-by-term-and-location',
                restaurants
            })
        );