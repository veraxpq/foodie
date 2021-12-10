import logInJSON from './data/LognIn.json'

const users = (state = logInJSON, action) => {
    switch (action.type) {
        case 'USERS_LOGIN_REQUEST':
            console.log("user log in get action", action)
            if(action.user.status === 0){
                alert("Your email/password does not exists!")
            }
            else {return action.user};
        default:
            return state;
    }
};

export default users;