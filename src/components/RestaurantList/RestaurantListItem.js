import React from "react";
import {RatingView} from "react-simple-star-rating";

const RestaurantListItem = (restaurant) => {
    restaurant = restaurant.restaurant;
    return (
        <li className="card f-restaurant-item-card">
            <img src={restaurant.image} className="card-img-top" alt="Fogo de Chao"/>
                <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <div>
                        <RatingView ratingValue={restaurant.rating} /* RatingView Props */ />
                        <span>
                            22 reviews
                        </span>
                    </div>
                    <p className="card-text">
                        {restaurant.description}
                    </p>
                    <a href="#" className="btn btn-primary">Reserve</a>
                </div>
        </li>
    )
}

export default RestaurantListItem;