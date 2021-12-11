import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postNewComment} from "../../services/myCommentsService";
import ReactStars from "react-rating-stars-component";
import {fetchAllPersonalProfile} from "../../services/personalProfileService";
import {fetchAllDetail} from "../../services/restaurantDetailService";
import {useParams} from "react-router-dom";




const NewComment = () => {
  const rate = {
    size: 25,
    count: 5,
    isHalf: false,
    value: 0,
    color: "lightgray",
    activeColor: "orange",
    onChange: newValue => {
      console.log(`Example 3: new value is ${newValue}`);
    }
  };
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.personalProfile); //locate current user
  useEffect(() =>fetchAllPersonalProfile(dispatch), [])
  const params = useParams();
  const id = params.restaurantId;
  const selectRestaurant = (state) => state.restaurantDetail
  const restaurant = useSelector(selectRestaurant);
  useEffect(() =>fetchAllDetail(dispatch, id), []);

  const commentClickHandler = () => {
    const comment = {
      rating: rate.value,
      text: newComment,
      username: profileData.username,
      restaurantName: restaurant.data.name,
      restaurantId: id
    }
    postNewComment(dispatch, comment);
  }

  return(
      <>
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
              <textarea value={newComment}
                        onChange={(event) => setNewComment(event.target.value)}
                        className="form-control"
                        style={{width: "100%", color: "black",
                          padding: "0px",
                          paddingTop: "15px"}}
                        placeholder="what do you think about the restaurant?"></textarea>
              <hr style={{color: "white"}}/>
              <button onClick={commentClickHandler} type="submit" className="btn btn-outline-dark btn-primary f-register-submit">Write a review</button>
            </div>
          </fieldset>
        </form>
      </>
  );
}

export default NewComment;