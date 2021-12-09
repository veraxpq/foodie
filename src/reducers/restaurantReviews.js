import restaurantReviews from './data/reviews.json';

const restaurantReviewList = (state = restaurantReviews, action) => {
  console.log(state)

  switch (action.type) {
    case 'fetch-all-reviews':
      console.log("action.reviews",action.reviews)
      return(action.reviews);
      break;

    default:
      return(state);
  }
};

export default restaurantReviewList;