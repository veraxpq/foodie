import profileJSON from './data/BusinessProfile.json'


const businessProfile = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-business-profile':
            return( action.BusinessProfile);
            break;

        case 'update-business-profile':
            const newState = [action.BusinessProfile];
            return newState;
            break;

        default:
            return state;
    }

};



export default businessProfile;
