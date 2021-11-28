import React from "react";
import RestaurantList from "../RestaurantList";

const HomePageComponent = () => {
    return (
        <>
            <div className={"f-home-banner"}>
                <div className="row f-home-search-bar">
                    <div className={"col-10"}>
                        <input className="f-home-search me-sm-2" type="text" placeholder="What do you want to eat?"/>
                    </div>
                    <div className={"col-2"}>
                        <button className="f-home-search-btn" type="submit">Search</button>
                    </div>
                </div>
            </div>
            <RestaurantList/>
        </>


    )
}

export default HomePageComponent;