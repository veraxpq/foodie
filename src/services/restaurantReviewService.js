const REVIEW_API = 'https://foodie-mysql-database.herokuapp.com';


export const fetchAllReviews = (dispatch,id) =>
    fetch(`${REVIEW_API}/getReviewsByRestaurantId?restaurantId=${id}`)
    .then(response => response.json())
    .then(reviews =>
        dispatch({
          type: 'fetch-all-reviews',
          reviews
        })
    );




