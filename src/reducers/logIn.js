import profileJSON from './data/BusinessProfile.json'

const userInfo = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-user-info':
            return( action.user);
            break;

        case 'log-in-user':
            const newState = [action.user];
            return newState;
            break;

        default:
            return state;
    }

};



export default userInfo;