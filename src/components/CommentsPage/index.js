import React, {useEffect} from "react";
import CommentItem from "./CommentsComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllMyComments} from "../../services/myCommentsService";


const selectAllCommentsData = (state) => state.myComments;


const MyCommentsList = () => {
    const comments = useSelector(selectAllCommentsData);
    const dispatch = useDispatch();
    useEffect(() =>fetchAllMyComments(dispatch), []);
    console.log("all comments",comments)


    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>My Comments</h3>
            </li>
            {comments.data&&comments.data.map(comment => {
                return (
                    <CommentItem comment={comment}/>
                );
            })
            }
        </ul>
    )
}
export default MyCommentsList;