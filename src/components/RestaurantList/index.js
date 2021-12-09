import React, {useEffect} from "react";
import RestaurantListItem from "./RestaurantListItem";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantByLocation} from "../../services/searchRestaurantsServices";

const selectAllRestaurants = (state) => state.searchRestaurants;
const RestaurantList = () => {
    const restaurants = useSelector(selectAllRestaurants);
    const dispatch = useDispatch();
    const location = "seattle";
    useEffect(() => {getRestaurantByLocation(dispatch,location)} ,[dispatch]);
    console.log("HomeRestaurants", restaurants);
    return (
        <>
            <div className={"f-restaurant-list-category-title"}>
                <span className={"f-float-left"}>Restaurants Near You</span>
                <Link to={"/search/restaurant/seattle"} className={"f-home-view-all"}>View All</Link>
            </div>
            <hr className="f-hr"/>
            <ul className={"f-restaurant-list-ul"}>
                {
                    restaurants.data.businesses.map(restaurant => {
                        return <RestaurantListItem restaurant = {restaurant}/>

                    })
                }
            </ul>
        </>
    )
}

export default RestaurantList;