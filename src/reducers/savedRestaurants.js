import saved_restaurants from './data/SavedRestaurants.json';

const savedRestaurants = (state = saved_restaurants, action) => {
  console.log(state)

  switch (action.type) {
    case 'fetch-all-saved':
      return(action.saveRestaurants);
      break;

    case 'save':
      const added = {
        _id: (new Date()).getTime() + '',
        ...action.saveRestaurant,
      };
      return ([
        added,
        ...state,
      ]);

    default:
      return(state);
  }
};

export default savedRestaurants;