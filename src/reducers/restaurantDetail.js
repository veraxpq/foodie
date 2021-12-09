import restaurant from './data/restaurantDetail.json'


const restaurantDetail = (state = restaurant, action) => {
  switch (action.type) {
    case 'fetch-all-detail':
      return( action.restaurantDetail);
      break;

    default:
      return state;
  }

};

export default restaurantDetail;
