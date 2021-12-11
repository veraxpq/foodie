const PROFILE_API = 'https://foodie-mysql-database.herokuapp.com';


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

export const updateCurrentPersonalProfile = (dispatch, PersonalProfile,token) =>
        // ?id=${PersonalProfile.id}
    fetch(`${PROFILE_API}/foodie/updateUserInfo`, {
        // mode: 'no-cors',
        method: 'PUT',
        body: JSON.stringify(PersonalProfile),
        headers: {
            'content-type': 'application/json',
            'authorization':`${token}`
        }
    }).then(response =>
                dispatch({
                             type: 'update-personal-profile',
                             PersonalProfile
                         }));