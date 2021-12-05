import React from "react";
import TopBar from "../TopBar";
import {RatingView} from "react-simple-star-rating";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
import ReviewList from "../ReviewList";
import ImageGallery from 'react-image-gallery';
import menu from "../../tempData/menu.json";

const rate = {
  size: 25,
  count: 5,
  isHalf: false,
  value: 4,
  color: "lightgray",
  activeColor: "orange",
  onChange: newValue => {
    console.log(`Example 3: new value is ${newValue}`);
  }
};

const RestaurantDetailPage = () => {
  return (
      <>
        <TopBar/>
        <img alt={''} className={"f-restaurant-detail-banner"} src="../../../../images/dolarshop.png">
        </img>
        <div className={"f-margin-left"} style={{top:"-210px", position:"relative", color:"white"}}>
          <b className={"f-restaurant-detail-title"}>The Dolar Shop</b>
          <div className="row mt-1">
            <div className="col-2">
              Chinese
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-1">
              <i className="fas fa-location-arrow"></i>
            </div>
            <div className="col-10 f-bold">
              11020 NE 6th St Ste 90 Bellevue, WA 98004
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-1">
              <i className="fas fa-phone"></i>
            </div>
            <div className="col-10 f-bold">
              +1 (425) 390-8888
            </div>
          </div>
          <button className="btn btn-primary rounded-pill mt-1">Save</button>
        </div>
        <div className={"f-margin-left"} style={{top: "-200px", position: "relative"}}>
          <h2 className="f-bold mt-3">Description</h2>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <p className={"f-margin-right"}>
            The Dolar Shop is an upscale Chinese hot pot restaurant that started in Macau, China since 2004. The highlight of our cuisine is individual pots, sauce bar, and the quality of our products which is sourced locally. Situated on two floors with over 200+ seats featuring a bar/lounge and four private rooms, The Dolar Shop is an experience from the time you walk through our doors until the end of dinner. The Dolar Shop has won "Best Of China 2016" & "Top 5 Trendsetting Chinese Restaurant 2018.
          </p>

          <h2 className="f-bold mt-3">Menu</h2>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <div className={"row"}>
            <div className={"col-2"}>
              <img src={"../../../../images/menu1.jpeg"} alt={""} className={"f-menu"}/>
            </div>
            <div className={"col-2"}>
              <img src={"../../../../images/menu2.jpeg"} alt={""} className={"f-menu"}/>
            </div>
            <div className={"col-2"}>
              <img src={"../../../../images/menu3.jpeg"} alt={""} className={"f-menu"}/>
            </div>
            <div className={"col-2"}>
              <img src={"../../../../images/menu4.jpeg"} alt={""} className={"f-menu"}/>
            </div>
            <div className={"col-2"}>
              <img src={"../../../../images/menu5.jpeg"} alt={""} className={"f-menu"}/>
            </div>
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
                      <RatingView ratingValue={4} /* RatingView Props */ />
                      <p style={{fontSize:"12px"}}>4.0 based on recent ratings</p>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className={"col-2"}></div>
            <div className={"col-4"}></div>
          </div>
          <div >

            <form className={""}>
              <fieldset>
                <div className="form-group row ">
                  <b className="mb-2">Write a review</b>
                  <label htmlFor="rating" className="col-sm-2 col-form-label">Rating: </label>
                  <div className="col-sm-4">
                    <ReactStars {...rate} />
                  </div>
                </div>
                <div className={"f-margin-right"}>
                  <label htmlFor="comment" className="col-sm-4 col-form-label">Comment:</label>
                  <textarea value={""}
                      //onChange={(event) => setWhatsHappening(event.target.value)}
                            className="form-control"
                            style={{width: "100%", color: "white",
                              padding: "0px",
                              paddingTop: "15px"}}
                            placeholder="what do you think about the restaurant?"></textarea>
                  <button type="submit" className="btn btn-outline-dark btn-primary f-register-submit">Write a review</button>
                </div>
              </fieldset>
            </form>
          </div>
          <hr className="f-margin-right" style={{color:"darkgray"}}/>
          <ReviewList/>
        </div>




      </>


  )
}

export default RestaurantDetailPage;