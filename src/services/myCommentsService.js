//const COMMENT_API = 'http://localhost:5000/rest/my_comments';
import userInfo from "../reducers/logIn";
import {useSelector} from "react-redux";

const COMMENT_API = 'https://foodie-mysql-database.herokuapp.com/foodie';


export const fetchAllMyComments = (dispatch,userId) =>
    // ${userId}

    fetch(`${COMMENT_API}/getReviewsByUserId?id=${userId}`)
        .then(response => response.json())
        .then(comments =>
                  dispatch({
                               type: 'fetch-all-comments',
                               comments
                           })
        );

export const deleteComment = (dispatch, comment, token) =>
    fetch(`${COMMENT_API}/deleteReviewById?reviewId=${comment.id}`, {
        method: 'DELETE',
        headers: {
          'authorization':`${token}`
        }
    }).then(response => dispatch({
                                     type: 'delete-comment',
                                         comment
                                 }));

export const postNewComment = (dispatch, newComment, token) =>
    fetch(`${COMMENT_API}/postReviews`, {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        'content-type': 'application/json',
        'authorization':`${token}`
      }
    })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: 'create-comment',
        newComment
      })
    });


