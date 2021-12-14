import React, {useEffect} from "react";
import ReviewItem from "./ReviewItem";
//import reviews from "../../tempData/reviews.json";
import {fetchAllReviews} from "../../services/restaurantReviewService";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

//const selectAllReviews = (state) => state.restaurantReviewList;

const ReviewList = (
    // {
    //   reviews = [
    //     {
    //       rating: 4,
    //       time_created: "2021-12-03 05:13:18",
    //       id: "rG1PYfs0kGM-hGK53NWwbQ",
    //       text: "We have celebrated my birthday here. Since it was a surprise I wasn't the one who made the reservation. When my bf placed the reservation he told me if we...",
    //       user: {
    //         profile_url: "https://www.yelp.com/user_details?userid=AUeb_LE04wcVeJpz6l-tfQ",
    //         image_url: "https://s3-media2.fl.yelpcdn.com/photo/YjwOQ3j4JyX8pMXxzUbfLg/o.jpg",
    //         name: "Ruby Jade M.",
    //         id: "AUeb_LE04wcVeJpz6l-tfQ"
    //       },
    //       url: "https://www.yelp.com/biz/the-grandview-restaurant-san-jose?adjust_creative=W70yu8CkVtJTt84eiF-g2w&hrid=rG1PYfs0kGM-hGK53NWwbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=W70yu8CkVtJTt84eiF-g2w"
    //     }
    //   ]
    // }
    ) => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.restaurantId;
  useEffect(() =>fetchAllReviews(dispatch,id), []);
  const selectAllReviews = (state) => state.restaurantReviewList;
  const reviewList = useSelector(selectAllReviews);
  //console.log("res id for reviews", reviewList);
  //const reviews = reviewList.data && reviewList.data[0] && reviewList.data[0].reviews;
  //const params = useParams();
  //const id = params.restaurantId;
  //const reviews = useSelector(selectAllReviews);
  //const dispatch = useDispatch();
  //useEffect(() =>fetchAllReviews(dispatch,id), []);
  //const item = reviewList.data && reviewList.data[0] && reviewList.data[0].reviews;
  //console.log("restaurant reviews", item);
  return(
      <>
        {reviewList&&reviewList.data && reviewList.data.map(review => {
          return(
              <ReviewItem review = {review}/>
          );
        })}
      </>
  );
}
export default ReviewList;