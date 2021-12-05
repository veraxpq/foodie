import React from "react";
import ReviewItem from "./ReviewItem";
import reviews from "../../tempData/reviews.json";



const ReviewList = () => {
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