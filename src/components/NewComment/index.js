import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postNewComment} from "../../services/myCommentsService";
import ReactStars from "react-rating-stars-component";
import {fetchAllPersonalProfile} from "../../services/personalProfileService";
import {fetchAllDetail} from "../../services/restaurantDetailService";
import {useParams} from "react-router-dom";



const selectAllComments = (state) => state.yComments;
const NewComment = () => {
  const rate = {
    size: 25,
    count: 5,
    isHalf: false,
    value: 0,
    color: "lightgray",
    activeColor: "orange",
    onChange: value => {
      console.log(`new value is ${value}`);
    }
  };
  const [allComments, setAllComments] = useSelector(selectAllComments)||'';
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();
  //const profileData = useSelector(state => state.personalProfile); //locate current user
  //useEffect(() =>fetchAllPersonalProfile(dispatch), [])
  const params = useParams();
  const id = params.restaurantId;
  const selectRestaurant = (state) => state.restaurantDetail
  const restaurant = useSelector(selectRestaurant);
  useEffect(() =>fetchAllDetail(dispatch, id), []);
  const userName = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  // console.log("test token", token);
  // console.log("test user id", userId);
  // console.log("test res name", restaurant.data.name);

  const commentClickHandler = async (e) => {
    if (rating && newComment) {
      const comment = {
        rating: rating,
        text: newComment,
        userId: userId,
        user: {
          name: userName,
          id: userId
        },
        restaurantName: restaurant.data.name,
        restaurantId: id,
      }
      await postNewComment(dispatch, comment, token);
      window.location.reload(false);
    }
    else alert("Please don't leave empty filed");

}



  return(
      <>
        <div className={""}>
          <fieldset>
            <div className="form-group row ">
              <b className="mb-2">Write a review</b>
              <label htmlFor="rating" className="col-sm-2 col-form-label">Rating: </label>
              {/*<div className="col-sm-4">*/}
              {/*  <ReactStars {...rate} />*/}
              {/*</div>*/}
              {/*<label htmlFor="rating" className="col-sm-4 col-form-label">Restaurant Name</label>*/}
              <div className="col-sm-4">
                <input type="text" readOnly="" className="form-control-plaintext f-form-border" id="rating"
                       value={rating} onChange={e => setRating(e.target.value)}/>
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
              {/*<button onClick={commentClickHandler} type="submit" className="btn btn-outline-dark btn-primary f-register-submit">Write a review</button>*/}
              <button onClick={commentClickHandler} type="submit" className="btn btn-outline-dark btn-primary f-register-submit">Write a review</button>
            </div>
          </fieldset>
        </div>
      </>
  );
}

export default NewComment;