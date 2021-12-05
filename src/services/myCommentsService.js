const COMMENT_API = 'http://localhost:5000/rest/my_comments';


export const fetchAllMyComments = (dispatch) =>
    fetch(COMMENT_API)
        .then(response => response.json())
        .then(comments =>
                  dispatch({
                               type: 'fetch-all-comments',
                               comments
                           })
        );




export const deleteComment = (dispatch, comment) =>
    fetch(`${COMMENT_API}/${comment._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
                                     type: 'delete-comment',
                                         comment
                                 }));



