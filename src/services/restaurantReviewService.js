const REVIEW_API = 'https://foodie-mysql-database.herokuapp.com';


export const fetchAllReviews = (dispatch) =>
    fetch(`${REVIEW_API}/getReviewsByRestaurantId?restaurantId=kOY-1i0jaW6Bb8as34sqwQ`)
    .then(response => response.json())
    .then(reviews =>
        dispatch({
          type: 'fetch-all-reviews',
          reviews
        })
    );




