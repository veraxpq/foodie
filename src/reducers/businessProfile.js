import profileJSON from './data/BusinessProfile.json'


const businessProfile = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-business-profile':
            console.log("action.PersonalProfile", action.BusinessProfile)
            return( action.BusinessProfile);
            break;

        case 'update-business-profile':
            const newState = (action.BusinessProfile);
            // return newState;
            console.log("new state", newState)
            return ({...state,"data":newState});
            break;

        default:
            return state;
    }

};



export default businessProfile;
