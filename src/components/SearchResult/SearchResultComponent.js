import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import restaurants from "../../tempData/restaurants_result.json"
import RestaurantItem from "./RestaurantItem";
import {getRestaurantByLocation, getRestaurantByTermAndLocation} from "../../services/searchRestaurantsServices";
import {useParams} from "react-router-dom";


const selectAllRestaurants = (state) => state.searchRestaurants;
const SearchResultComponent = () => {
    const params = useParams();
    const term = params.term;
    const location = params.location;
    //console.log("search page params", term, location);
    const restaurants = useSelector(selectAllRestaurants);
    const dispatch = useDispatch();
    useEffect(()=>{
        getRestaurantByTermAndLocation(dispatch,term,location)},[dispatch])
    const allRestaurants = restaurants.data;
    //console.log("allRestaurants", restaurants);
    return(
        // <div></div>
        <ul className="list-group">
            {
                restaurants.data.businesses.map(restaurant=>{
                    return(<RestaurantItem restaurant={restaurant}/>);
                })
            }
        </ul>
    )
}

export default SearchResultComponent;