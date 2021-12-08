import React from "react";
import {RatingView} from "react-simple-star-rating";
import {Link} from "react-router-dom";

const getDescription = (description) => {
    if (description.length > 50) {
        return description.substring(0, 50) + "...";
    }
    return description;
}
const RestaurantListItem = (restaurant) => {
    restaurant = restaurant.restaurant;
    let description = getDescription(restaurant.description);
    return (
        <li className="card f-restaurant-item-card col-3">
            <Link to={`/restaurant_detail/${restaurant.name}`}>
                <img src={restaurant.image} className="card-img-top" alt="Fogo de Chao"/>
            </Link>
                <div className="card-body">
                    <Link to={`/restaurant_detail/${restaurant.name}`} className="f-restaurant-result-name">
                    <h5 className="card-title">{restaurant.name}</h5>
                    </Link>
                    <div>
                        <RatingView ratingValue={restaurant.rating} /* RatingView Props */ />
                        <span>
                            22 reviews
                        </span>
                    </div>
                    <p className="card-text">
                        {description}
                    </p>
                    <a href="#" className="btn btn-primary">Reserve</a>
                </div>
        </li>
    )
}

export default RestaurantListItem;