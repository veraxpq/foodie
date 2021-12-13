import React, {useEffect} from "react";
import RestaurantListItem from "./RestaurantListItem";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantByLocation} from "../../services/searchRestaurantsServices";
import {fetchAllBusinessProfile} from "../../services/businessProfileService";
import {fetchAllPersonalProfile} from "../../services/personalProfileService";
const selectAllRestaurants = (state) => state.searchRestaurants;
const selectBusinessProfile = (state) => state.businessProfile;
const selectPersonalProfile = (state) => state.personalProfile;
const PROFILE_API = 'https://foodie-mysql-database.herokuapp.com';
const RestaurantList = () => {
    const restaurants = useSelector(selectAllRestaurants);
    const dispatch = useDispatch();
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    var location = "02134";
    console.log("homepage userId and token",{userId, token})
    console.log(localStorage)
    // const businessUserProfile = useSelector(selectBusinessProfile);
    // useEffect(()=>{fetchAllBusinessProfile(dispatch,userId,token)},[dispatch]);
    // console.log("A business user logged in and at hoempage", businessUserProfile);
    const personalUserProfile = useSelector(selectPersonalProfile);
    useEffect(()=>{fetchAllPersonalProfile(dispatch,userId,token)},[dispatch]);
    console.log("A personal user logged in and at hoempage", personalUserProfile);
    if (localStorage.getItem('userType')){
        location = personalUserProfile.data.zipCode;
    }
    console.log("zipCode at homepage",location)
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