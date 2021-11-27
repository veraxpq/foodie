import React from "react";
import RestaurantList from "../RestaurantList";

const HomePageComponent = () => {
    return (
        <>
            <div className={"f-home-banner"}>
                <div className="f-home-search-bar">
                    <input className="f-home-search me-sm-2" type="text" placeholder="What do you want to eat?"/>
                    <button className="btn btn-secondary " type="submit">Search</button>
                </div>
            </div>
            <RestaurantList/>
        </>


    )
}

export default HomePageComponent;