import React from "react";
import RestaurantList from "../RestaurantList";
import SearchBar from "../SearchBar";

const HomePageComponent = () => {
    return (
        <>
            <div className={"f-home-banner"}>
                <div className={"f-home-search-bar"}><SearchBar/></div>
            </div>
            <RestaurantList/>
        </>
    )
}

export default HomePageComponent;