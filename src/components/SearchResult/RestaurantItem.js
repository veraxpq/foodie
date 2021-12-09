import React from "react";
import { RatingView } from 'react-simple-star-rating';
import {Link} from "react-router-dom";

const RestaurantItem = (
    {
        restaurant = {
            "rating": 2.5,
            "price": "$$",
            "phone": "+14154212337",
            "id": "molinari-delicatessen-san-francisco",
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                }
            ],
            "review_count": 910,
            "name": "Molinari Delicatessen",
            "url": "https://www.yelp.com/biz/molinari-delicatessen-san-francisco",
            "coordinates": {
                "latitude": 37.7983818054199,
                "longitude": -122.407821655273
            },
            "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/6He-NlZrAv2mDV-yg6jW3g/o.jpg",
            "location": {
                "city": "San Francisco",
                "country": "US",
                "address2": "",
                "address3": "",
                "state": "CA",
                "address1": "373 Columbus Ave",
                "zip_code": "94133"
            }
        }
    }
    ) =>
{
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-4">
                    <Link to={`/restaurant_detail/${restaurant.name}`}>
                        <img src={restaurant.image_url}
                             alt="rimg"
                             width="100%"
                             height="100%"
                             className="float-left f-home-restaurant-pic"
                        />
                    </Link>

                </div>
                <div className="col-4 ms-3 mt-1">
                    <div className="pb-2">
                        <Link to={`/restaurant_detail/${restaurant.name}`} className="f-restaurant-result-name">
                        <div>{restaurant.name}</div>
                        </Link>
                        <div>{restaurant.price} • {restaurant.categories[0].alias}</div>

                        <a href='#' className="f-restaurant-result-review">{restaurant.review_count} Reviews</a>
                        <div>
                            <RatingView className="mt-2" ratingValue={restaurant.rating} /* RatingView Props */ />
                            <span className="number-rating pb-5"> {restaurant.rating} / 5 </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default RestaurantItem;