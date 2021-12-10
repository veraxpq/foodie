import logInJSON from './data/LognIn.json'

const users = (state = logInJSON, action) => {
    switch (action.type) {
        case 'USERS_LOGIN_REQUEST':
            return {action.user};
        default:
            return state;
    }
};

export default users;