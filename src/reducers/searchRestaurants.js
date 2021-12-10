import restaurants_result from './data/searchRestaurants.json';

const searchRestaurants = (state = restaurants_result, action)=>{
    console.log("state",state)
    switch(action.type){
        case 'fetch-all-restaurants-by-term-and-location':
            // console.log("action.restaurants",action.restaurants)
            return(action.restaurants);
            break;
        case 'fetch-all-restaurants-by-location':
            // console.log("action.restaurants",action.restaurants)
            return(action.restaurants);
            break;
        default:
            // console.log("action.default",state)
            return(state);
    }
};

export default searchRestaurants;