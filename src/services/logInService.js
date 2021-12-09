// const USER_API = "http://localhost:18081/foodie/login";
const USER_API = "https://foodie-mysql-database.herokuapp.com/foodie/login"


// export const fetchAllUser = (dispatch) =>
//     fetch(USER_API)
//         .then(response => response.json())
//         .then(UserInfo =>
//                   dispatch({
//                                type: 'fetch-all-user-info',
//                                UserInfo
//                            })
//         );



export const logInUser = (dispatch,user,id) =>
    fetch(`${USER_API}`, {
        method: 'POST',
        body: JSON.stringify(user),
        // credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response=>response.json())
        .then((data) => dispatch({
            type: 'check-log-in-status',
            data
        }))

        // {
        //     console.log(response)
        //     if (response.status ===1){
        //     dispatch({
        //                  type: 'log-in-success',
        //                  response.data
        //              })
        //
        // }
        //     else if (response.status ===0){
        //         dispatch({
        //                      type: 'log-in-failed',
        //                      user
        //                  })
        //     }
        // })




