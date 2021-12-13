import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import restaurants from "../../tempData/restaurants_result.json"
import RestaurantItem from "./RestaurantItem";
import {getRestaurantByLocation, getRestaurantByTermAndLocation} from "../../services/searchRestaurantsServices";
import {useParams} from "react-router-dom";

const selectAllRestaurants = (state) => state.searchRestaurants;
const SearchResultComponent = () => {
    const queryString = window.location.search;
    console.log("search reult url",queryString);
    const urlParams = new URLSearchParams(queryString);
    const term = urlParams.get('term');
    const location = urlParams.get('cityName');
    console.log("search result component local storage", {term, location});
    const restaurants = useSelector(selectAllRestaurants);
    const dispatch = useDispatch();
    useEffect(()=>{
        getRestaurantByTermAndLocation(dispatch,term,location)},[dispatch])
    console.log("Fetched restaurants at search result", restaurants);
    return(
        <ul className="list-group">
            {
                restaurants && restaurants.data && restaurants.data.businesses &&
                restaurants.data.businesses.map(restaurant=>{
                    return(<RestaurantItem restaurant={restaurant}/>);
                })
            }
        </ul>

    )
}

export default SearchResultComponent;