// const USER_API = "http://localhost:18081/foodie/login";
const USER_API = "https://foodie-mysql-database.herokuapp.com/foodie/login";
const USERINFO_API = "https://foodie-mysql-database.herokuapp.com/foodie/userInfo";
export const fetchAllUser = (dispatch, id, token) =>
    fetch(`${USERINFO_API}?id=${id}`, {
        headers: {
            'content-type': 'application/json',
            'authorization':`${token}`
        }
    })
        .then(response => response.json())
        .then(UserInfo =>
                  dispatch({
                               type: 'fetch-all-user-info',
                               UserInfo
                           })
        );

export const logInUser = (dispatch,email, password) =>
    fetch(`${USER_API}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password })
    })
        .then(response => response.json())
        .then(data => dispatch({
            type: 'fetch-all-user-info',
            data}));

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




