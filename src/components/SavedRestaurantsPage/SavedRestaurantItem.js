import './SavedRestaurants.css'
import {RatingView} from "react-simple-star-rating";
import React from "react";
const SavedRestaurantItem = ({restaurant}) => {

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={restaurant.avatarIcon} width="108" className="img-fluid rounded float-start"/>

                </div>
                <div className="col-6">
                    <h5>{restaurant.name}
                        <i className="fas fa-check-circle ms-1"></i>
                    </h5>
                    <h6 className="wd-grey-content-font"> Average Rating: {restaurant.rating}</h6>
                    <RatingView ratingValue={restaurant.rating} />

                    <h6 className="wd-grey-content-font">{restaurant.tag} | {restaurant.location}</h6>
                </div>
                <div className="col-4 text-end">
                    <button className="btn btn-primary rounded-pill mt-1">Reserve Now</button>
                </div>
            </div>
        </li>);

}
export default SavedRestaurantItem;