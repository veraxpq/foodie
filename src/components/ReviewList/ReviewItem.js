import React from "react";
import {RatingView} from "react-simple-star-rating";

const ReviewItem = ({review}) => {
  return (
      <>
        <li className="list-group-item f-margin-right">
          <div className="row">
            <div className="col-2">
              <b>{review.user.name}</b><br/>
            </div>
            <div className="col-10">
              <RatingView ratingValue={review.rating}/>
              <p style={{fontSize:"12px"}}>{review.time_created}</p>
              <p>{review.text}</p>
            </div>
          </div>
        </li>
      </>
  );
}
export default ReviewItem;