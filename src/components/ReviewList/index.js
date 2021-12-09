import React, {useEffect} from "react";
import ReviewItem from "./ReviewItem";
//import reviews from "../../tempData/reviews.json";
import {fetchAllReviews} from "../../services/restaurantReviewService";
import {useDispatch, useSelector} from "react-redux";

const selectAllReviews = (state) => state.restaurantReviewList();

const ReviewList = () => {
  const reviews = useSelector(selectAllReviews);
  const dispatch = useDispatch();
  useEffect(() =>fetchAllReviews(dispatch), []);
  return(
      <>
        {reviews.map(review => {
          return(
              <ReviewItem review = {review}/>
          );
        })}
      </>
  );
}
export default ReviewList;