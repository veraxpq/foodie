import React from "react";
import RestaurantListItem from "./RestaurantListItem";
import restaurants from "../../tempData/restaurants.json"

const RestaurantList = () => {
    return (
        <>
            <div className={"f-restaurant-list-category-title"}>
                Bar
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