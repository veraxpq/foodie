const RESTAURANTDETAIL_API = 'https://foodie-mysql-database.herokuapp.com';


export const fetchAllDetail = (dispatch,id) =>
    fetch(`${RESTAURANTDETAIL_API}/getRestaurantById/${id}`)
    .then(response => response.json())
    .then(restaurantDetail =>
        dispatch({
          type: 'fetch-all-detail',
          restaurantDetail
        })
    );