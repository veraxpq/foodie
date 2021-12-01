import './comments.css'
import {RatingView} from "react-simple-star-rating";
import React from "react";


const CommentItem = ({comment}) => {

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={comment.avatarIcon} width="118" className="img-fluid rounded float-start"/>

                </div>
                <div className="col-6">
                    <h5 className="wd-black-topic-font">{comment.name}
                        <i className="fas fa-check-circle ms-1"></i>
                    </h5>

                    <h6 className="wd-comment-title-font">{comment.tag}</h6>
                    <h6 className="wd-comment-title-font">{comment.location}</h6>
                    <h6>Date: {comment.date} </h6>
                    <RatingView ratingValue={comment.rating} />

                    <h6>{comment.comments}</h6>


                </div>
                <div className="col-4 text-end">
                    {/*<i className="fas fa-trash-alt"></i>*/}
                    <button className="btn btn-primary mt-1">Delete</button>
                </div>
            </div>
        </li>);

}
export default CommentItem;