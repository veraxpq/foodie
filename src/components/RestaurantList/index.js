import React, {useEffect} from "react";
import RestaurantListItem from "./RestaurantListItem";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRestaurants} from "../../services/restaurantsService";

const selectAllRestaurants = (state) => state.restaurantsInfo;
const RestaurantList = () => {
    const restaurants = useSelector(selectAllRestaurants);
    const dispatch = useDispatch();
    // useEffect(() => fetchAllRestaurants(dispatch, []));

    return (
        <>
            <div className={"f-restaurant-list-category-title"}>
                <span className={"f-float-left"}>Restaurants Near You</span>
                <Link to={"/search"} className={"f-home-view-all"}>View All</Link>
            </div>
            <hr className="f-hr"/>
            <ul className={"f-restaurant-list-ul"}>
                {
                    restaurants.map(restaurant => {
                        return <RestaurantListItem restaurant = {restaurant}/>
                        
                    })
                }
            </ul>
        </>
    )
}

export default RestaurantList;