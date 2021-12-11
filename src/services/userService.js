const LOGIN_API = "https://foodie-mysql-database.herokuapp.com/foodie/login"
const USER_INFO_API = "https://foodie-mysql-database.herokuapp.com/foodie/userInfo"
const CREATE_USER_API = "https://foodie-mysql-database.herokuapp.com/foodie/createUser";
const UPDATE_USER_API = "https://foodie-mysql-database.herokuapp.com/foodie/updateUserInfo";

export const login = (dispatch, email, password) =>
    fetch(`${LOGIN_API}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(response=>response.json())
        .then(user =>
            dispatch({
                type: 'USERS_LOGIN_REQUEST',
                user
            })
        );

export const getCompleteUserProfileById = (dispatch, userState) =>{
    fetch(`${USER_INFO_API}?id=${userState.data.id}`)
        .then(response => response.json())
        .then(user=>
            dispatch({
                type: 'GET_USER_BY_ID',
                user
            }));
}

// export const logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }

// export const getUserById(dispatch,id) {
//     const requestOptions = {
//         method: 'GET',
//         // headers: authHeader()
//     };
//     fetch(`${USER_INFO_API}/${id}`, requestOptions)
//         .then(handleResponse)
//         .then(user=> dispatch({
//             type: 'get-user-by-id',
//             user
//         });
// }
//
// function register(dispatch,user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };
//     fetch(`${CREATE_USER_API}`, requestOptions)
//         .then(handleResponse);
// }
//
// function update(dispatch,user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         // headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };
//     fetch(`${UPDATE_USER_API}/${user.id}`, requestOptions)
//         .then(handleResponse)
//         .then(user => dispathc({
//             t
//         })
//         );
// }
//
//
