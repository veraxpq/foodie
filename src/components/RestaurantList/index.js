import React, {useEffect} from "react";
import RestaurantListItem from "./RestaurantListItem";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantByLocation} from "../../services/searchRestaurantsServices";
import {fetchAllPersonalProfile} from "../../services/personalProfileService";

const selectAllRestaurants = (state) => state.searchRestaurants;
const selectPersonalProfile = (state) => state.personalProfile;
const PROFILE_API = 'https://foodie-mysql-database.herokuapp.com';
const RestaurantList = () => {
    const restaurants = useSelector(selectAllRestaurants);
    const dispatch = useDispatch();
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    var location = "98101";
    const personalUserProfile = useSelector(selectPersonalProfile);
    useEffect(()=>{fetchAllPersonalProfile(dispatch,userId,token)},[dispatch]);
    if (localStorage.getItem('userType')){
        location = personalUserProfile.data.zipCode;
        console.log("get user rpofile zipcode at home page", location);
    }
    useEffect(() => {getRestaurantByLocation(dispatch,location)} ,[dispatch]);
    console.log("Fetched restaurants at home page", restaurants);
    return (
        <>
            <div className={"f-restaurant-list-category-title"}>
                <span className={"f-float-left"}>Restaurants Near You</span>
                <Link to={`/search?term=food&cityName=${location}`} className={"f-home-view-all"}>View All</Link>
            </div>
            <hr className="f-hr"/>
            <ul className={"f-restaurant-list-ul"}>
                {
                    restaurants && restaurants.data && restaurants.data.businesses &&
                    restaurants.data.businesses.map(restaurant => {
                        return <RestaurantListItem restaurant = {restaurant}/>
                    })
                }
            </ul>
        </>
    )
}

export default RestaurantList;