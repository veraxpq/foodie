//const PROFILE_API = 'https://my-node-on-heroku.herokuapp.com/api/profile';
//const PROFILE_API = 'http://localhost:4000/api/profile';
const PROFILE_API = 'http://localhost:5000/rest/personalprofile';

export const fetchAllPersonalProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(PersonalProfile =>
                  dispatch({
                               type: 'fetch-all-personal-profile',
                               PersonalProfile
                           })
        );

export const updateCurrentPersonalProfile = (dispatch, PersonalProfile) =>
    fetch(`${PROFILE_API}/${PersonalProfile._id}`, {
        method: 'PUT',
        body: JSON.stringify(PersonalProfile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response =>
                dispatch({
                             type: 'update-personal-profile',
                             PersonalProfile
                         }));