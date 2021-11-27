import React from "react";
import comments from "./comments.json";
import CommentItem from "./CommentsComponent";

const MyCommentsList = () => {
    // retrieve state from store
    //const who = useSelector((state) => state.who);

    //const who = useSelector(selectAllWho);

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>My Comments</h3>
            </li>
            {comments.map(comment => {
                return (
                    <CommentItem comment={comment}/>
                );
            })
            }
        </ul>
    )
}
export default MyCommentsList;