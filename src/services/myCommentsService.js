//const COMMENT_API = 'http://localhost:5000/rest/my_comments';
import userInfo from "../reducers/logIn";
import {useSelector} from "react-redux";

const COMMENT_API = 'https://foodie-mysql-database.herokuapp.com/foodie';


export const fetchAllMyComments = (dispatch,userId) =>
    // ${comment.userId}

    fetch(`${COMMENT_API}/getReviewsByUserId?id=5`)
        .then(response => response.json())
        .then(comments =>
                  dispatch({
                               type: 'fetch-all-comments',
                               comments
                           })
        );

export const deleteComment = (dispatch, comment) =>
    fetch(`${COMMENT_API}/deleteReviewById?reviewId=${comment.id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
                                     type: 'delete-comment',
                                         comment
                                 }));

export const postNewComment = (dispatch, newComment) =>
    fetch(COMMENT_API, {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(comment =>
        dispatch({
          type: 'create-comment',
          comment
        })
    );


