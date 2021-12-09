import restaurants_result from './data/restaurants_result.json';

const initialState = {
    restaurants:restaurants_result
}

const restaurants = (state = initialState, action)=>{
    switch(action.type){
        case 'fetch-all-restaurants-by-location':
            return({
                restaurants:action.restaurants
            });
        default:
            return(state);
    }
};

export default restaurants;