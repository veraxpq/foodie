import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import restaurants from "../../tempData/restaurants_result.json"
import RestaurantItem from "./RestaurantItem";
import {getRestaurantByLocation, getRestaurantByTermAndLocation} from "../../services/searchRestaurantsServices";

const restaurants = (state) => state.restaurants.restaurants;
const SearchResultComponent = () => {
    const term = useSelector((state)=>state.location);
    const location = useSelector((state)=>state.location);
    const dispatch = useDispatch();
    useEffect(()=>{
        getRestaurantByTermAndLocation(dispatch, term, location)},[dispatch])
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