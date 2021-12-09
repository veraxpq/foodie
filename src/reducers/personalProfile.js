import profileJSON from './data/PersonalProfile.json'


const personalProfile = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-personal-profile':
            console.log("action.PersonalProfile", action.PersonalProfile)
            return( action.PersonalProfile);
            break;

        case 'update-personal-profile':
            const newState = [action.PersonalProfile];
            return newState;
            break;

        default:
            return state;
    }

};



export default personalProfile;
