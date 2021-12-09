import React from "react";
import TopBar from "../TopBar";
import {RatingView} from "react-simple-star-rating";
import ReviewList from "../ReviewList";
import NewComment from "../NewComment";
import {addSaved} from "../../services/savedRestaurantsService";
import {useDispatch} from "react-redux";


const RestaurantDetailComponent = ({restaurant}) => {
  const dispatch = useDispatch();
  const SaveRestaurant = () => {
    const save_restaurant = {
      "avatarIcon": restaurant.image_url,
      "name": restaurant.name,
      "rating" :restaurant.rating,
      "tag": restaurant.categories.title,
      "location": restaurant.locations.city
    }
    addSaved(dispatch, save_restaurant);
  }

  return (
      <>
        <TopBar/>
        <img alt={''} className={"f-restaurant-detail-banner"} src={restaurant.image_url}>
        </img>
        <div className={"f-margin-left"} style={{top:"-210px", position:"relative", color:"white"}}>
          <b className={"f-restaurant-detail-title"}>{restaurant.name}</b>
          <div className="row mt-1">
            {
              restaurant.categories.map(category =>
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
              {restaurant.location.display_address}
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-1">
              <i className="fas fa-phone"></i>
            </div>
            <div className="col-10 f-bold">
              {restaurant.display_phone}
            </div>
          </div>
          <button onClick={SaveRestaurant} className="btn btn-primary rounded-pill mt-1">Save</button>
        </div>
        <div className={"f-margin-left"} style={{top: "-200px", position: "relative"}}>
          <h2 className="f-bold mt-3">Description</h2>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <p className={"f-margin-right"}>
            {restaurant.messaging.use_case_text}
          </p>

          <h2 className="f-bold mt-3">Menu</h2>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <div className={"row"}>
            {
              restaurant.photos.map(photo =>
                  <div className="col-2">
                    <img src={photo} alt={""} className={"f-menu"}/>
                  </div>
              )
            }
          </div>
          <h2 className="f-bold mt-3">Reviews</h2>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <div className={"row"}>
            <div className={"col-4"}>
              <form className={""}>
                <fieldset>
                  <div className="form-group row ">
                    <b className="mb-2">Overall ratings and reviews</b>
                    <div >
                      <RatingView ratingValue={restaurant.rating}/>
                      <p style={{fontSize:"12px"}}>{restaurant.rating} based on {restaurant.review_count} reviews</p>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className={"col-2"}></div>
            <div className={"col-4"}></div>
          </div>
          <div >
            <NewComment/>
          </div>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <ReviewList/>
        </div>
      </>
  )
}

export default RestaurantDetailComponent;