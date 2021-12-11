import logInJSON from './data/LognIn.json'

// return user from LOGIN_API
const userReducer = (state = logInJSON, action) => {
    switch (action.type) {
        case 'USERS_LOGIN_REQUEST':
            console.log("user log in get action", action)
            if(action.user.status === 0){
                alert("Your email/password does not exists!")
            }
            else {return action.user};
        case 'GET_USER_BY_ID':
            console.log("user profile page get action", action)
            return action.user;
        default:
            return state;
    }
};

export default userReducer;