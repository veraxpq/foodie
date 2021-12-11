const PROFILE_API = 'https://foodie-mysql-database.herokuapp.com';
//const PROFILE_API = 'http://localhost:5000/rest/businessprofile';

export const fetchAllBusinessProfile = (dispatch,id) =>
    fetch(`${PROFILE_API}/foodie/userInfo?id=${id}`)
        .then(response => response.json())
        .then(BusinessProfile =>
                  dispatch({
                               type: 'fetch-all-business-profile',
                               BusinessProfile
                           })
        );

export const updateCurrentBusinessProfile = (dispatch, BusinessProfile,token) =>
    fetch(`${PROFILE_API}/foodie/updateUserInfo`, {
        method: 'PUT',
        body: JSON.stringify(BusinessProfile),
        headers: {
            'content-type': 'application/json',
            'authorization':`${token}`
        }
    }).then(response =>
                dispatch({
                             type: 'update-business-profile',
                             BusinessProfile
                         }));