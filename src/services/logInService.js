const USER_API = "http://localhost:18081/foodie/createBusinessUser";


export const fetchAllUser = (dispatch) =>
    fetch(USER_API)
        .then(response => response.json())
        .then(UserInfo =>
                  dispatch({
                               type: 'fetch-all-user-info',
                               UserInfo
                           })
        );

export const updateCurrentUser = (dispatch, UserInfo) =>
    fetch(`${USER_API}/${UserInfo._id}`, {
        method: 'PUT',
        body: JSON.stringify(UserInfo),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response =>
                dispatch({
                             type: 'update-user-info',
                             UserInfo
                         }));



