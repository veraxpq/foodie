import React from "react";
import restaurants from "../data/restaurants.json"
import RestaurantItem from "./RestaurantItem";
const SearchResultComponent = () => {
    return(

        <ul className="list-group">
            {
                restaurants.map(restaurant=>{
                    return(<RestaurantItem restaurant={restaurant}/>);
                })
            }
        </ul>
    )
}

export default SearchResultComponent;