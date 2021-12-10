import React, {useEffect} from "react";
import TopBar from "../TopBar";
import {RatingView} from "react-simple-star-rating";
import ReviewList from "../ReviewList";
import NewComment from "../NewComment";
import {addSaved} from "../../services/savedRestaurantsService";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllReviews} from "../../services/restaurantReviewService";

const selectAllReviews = (state) => state.restaurantReviewList;

const RestaurantDetailComponent = ({restaurant}) => {
  const dispatch = useDispatch();
  const SaveRestaurant = () => {
    const save_restaurant = {
      "avatarIcon": restaurant.data.image_url,
      "name": restaurant.data.name,
      "rating" :restaurant.data.rating,
      "tag": restaurant.categories.title,
      "location": restaurant.locations.city
    }
    addSaved(dispatch, save_restaurant);
  }
  const id = restaurant.data.id;
  const reviewList = useSelector(selectAllReviews);
  useEffect(() =>fetchAllReviews(dispatch,id), []);
  const reviews = reviewList.data && reviewList.data[0] && reviewList.data[0].reviews;
  return (
      <>
        <TopBar/>
        <img alt={''} className={"f-restaurant-detail-banner"} src={restaurant.data.image_url}>
        </img>
        <div className={"f-margin-left"} style={{top:"-180px", position:"relative", color:"white"}}>
          <b className={"f-restaurant-detail-title"}>{restaurant.data.name}</b>
          <div className="row mt-1">
            {
              restaurant.data.categories && restaurant.data.categories.map(category =>
                  <div className="col-2">
                    {category.title}
                  </div>
              )
            }
          </div>
          <div className="row mt-1">
            <div className="col-1">
              <i className="fas fa-location-arrow"></i>
            </div>
            <div className="col-10 f-bold">
              {restaurant.data.alias}
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-1">
              <i className="fas fa-phone"></i>
            </div>
            <div className="col-10 f-bold">
              {restaurant.data.display_phone}
            </div>
          </div>

        </div>
        <div className={"f-margin-left"} style={{top: "-160px", position: "relative"}}>
          <h2 className="f-bold mt-3">Menu</h2>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <div className={"row"}>
            {
              restaurant.data.photos && restaurant.data.photos.map(photo =>
                  <div className="col-2">
                    <img src={photo} alt={""} className={"f-menu"}/>
                  </div>
              )
            }
          </div>
          <h2 className="f-bold mt-3">Reviews</h2>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <div className={"row"}>
            <div className={"col-6"}>
              <form className={""}>
                <fieldset>
                  <div className="form-group row ">
                    <b className="mb-2">Overall ratings and reviews</b>
                    <div >
                      <RatingView ratingValue={restaurant.data.rating}/>
                      <p style={{fontSize:"12px"}}>{restaurant.data.rating} based on {restaurant.data.review_count} reviews</p>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className={"col-2"}></div>
          </div>
          <div >
            <NewComment/>
          </div>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <ReviewList reviews={reviews}/>
        </div>
      </>
  )
}

export default RestaurantDetailComponent;