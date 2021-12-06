const USER_API = "http://localhost:18081/foodie/login";


// export const fetchAllUser = (dispatch) =>
//     fetch(USER_API)
//         .then(response => response.json())
//         .then(UserInfo =>
//                   dispatch({
//                                type: 'fetch-all-user-info',
//                                UserInfo
//                            })
//         );

export const logInUser = (dispatch,user) =>
    fetch(`${USER_API}`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response =>
                dispatch({
                             type: 'log-in-user',
                             user
                         }));



