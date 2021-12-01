import restaurants from './data/restaurants.json'


const restaurantsInfo = (state = restaurants, action) => {
    switch (action.type) {
        case 'fetch-all-restaurants':
            return( action.restaurantsInfo);
            break;

        default:
            return state;
    }

};

export default restaurantsInfo;
