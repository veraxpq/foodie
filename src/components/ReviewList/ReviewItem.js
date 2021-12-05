import React from "react";
import {RatingView} from "react-simple-star-rating";

const ReviewItem = (
    {
      review = {
        name: "Andrea",
        time_created: "11/11/2021",
        rating: 5,
        text: "Dolar Shop is one of my go-to hot pot outings to impress visiting friends and family. The atmosphere is beautiful and the service feels like you're in a higher scale hot pot restaurant. On top of that, the quality of food is great.",
        location: "Seattle, WA"
      }
    }) => {
  return (
      <>
        <li className="list-group-item f-margin-right">
          <div className="row">
            <div className="col-2">
              <b>{review.name}</b><br/>
              <p style={{fontSize:"12px"}}>{review.location}</p>
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