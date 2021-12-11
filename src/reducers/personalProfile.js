import profileJSON from './data/PersonalProfile.json'


const personalProfile = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-personal-profile':
            console.log("action.PersonalProfile", action)
            return( action.PersonalProfile);
            break;
        case 'update-personal-profile':
            console.log("new state11111111111111111")
            const newState = (action.PersonalProfile);
            console.log("new state", newState)
            //return newState;
            return ({...state,"data":newState});
            break;

        default:
            return state;
    }

};



export default personalProfile;
