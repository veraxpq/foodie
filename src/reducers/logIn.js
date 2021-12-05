import profileJSON from './data/BusinessProfile.json'

const userInfo = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-user-info':
            return( action.UserInfo);
            break;

        case 'update-user-info':
            const newState = [action.UserInfo];
            return newState;
            break;

        default:
            return state;
    }

};



export default userInfo;