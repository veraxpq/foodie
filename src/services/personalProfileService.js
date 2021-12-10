const PROFILE_API = 'https://foodie-mysql-database.herokuapp.com';
//const PROFILE_API = 'http://localhost:4000/api/profile';
//const PROFILE_API = 'http://localhost:5000/rest/personalprofile';

export const fetchAllPersonalProfile = (dispatch, id) =>
    // ${PROFILE_API}/foodie/userInfo?id=5
    fetch(`${PROFILE_API}/foodie/userInfo?id=${id}`)
        .then(response => response.json())
        .then(PersonalProfile =>
                  dispatch({
                               type: 'fetch-all-personal-profile',
                               PersonalProfile
                           })
        );

export const updateCurrentPersonalProfile = (dispatch, PersonalProfile) =>
    fetch(`${PROFILE_API}/foodie/updateUserInfo?id=${PersonalProfile.id}`, {
        method: 'PUT',
        body: JSON.stringify(PersonalProfile),
        headers: {
            'content-type': 'application/json',
            // 'authorization':userInfo.token
        }
    }).then(response =>
                dispatch({
                             type: 'update-personal-profile',
                             PersonalProfile
                         }));