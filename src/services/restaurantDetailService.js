const RESTAURANTDETAIL_API = 'https://foodie-mysql-database.herokuapp.com';


export const fetchAllDetail = (dispatch,id) =>
    //${id}
    fetch(`${RESTAURANTDETAIL_API}/getRestaurantById?restaurantId=${id}`)
      .then(response => response.json())
      .then(RestaurantDetail =>
          dispatch({
            type: 'fetch-all-detail',
            RestaurantDetail
          })
      );
