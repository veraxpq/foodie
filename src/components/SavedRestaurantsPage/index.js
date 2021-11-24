import React from "react";
import restaurant from "./SavedRestaurants.json";
import {useSelector} from "react-redux";
import SavedRestaurantItem from "./SavedRestaurantItem";

//const selectAllWho = (state) => state.who;

const SavedRestaurantList = () => {
    // retrieve state from store
    //const who = useSelector((state) => state.who);

    //const who = useSelector(selectAllWho);

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Saved Restaurants</h3>
            </li>
            {restaurant.map(restaurant => {
                return (
                    <SavedRestaurantItem restaurant={restaurant}/>
                );
            })
            }
        </ul>
    )
}
export default SavedRestaurantList;