const PROFILE_API = 'https://foodie-mysql-database.herokuapp.com/';
//const PROFILE_API = 'http://localhost:5000/rest/businessprofile';

export const fetchAllBusinessProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(BusinessProfile =>
                  dispatch({
                               type: 'fetch-all-business-profile',
                               BusinessProfile
                           })
        );

export const updateCurrentBusinessProfile = (dispatch, BusinessProfile) =>
    fetch(`${PROFILE_API}/${BusinessProfile._id}`, {
        method: 'PUT',
        body: JSON.stringify(BusinessProfile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response =>
                dispatch({
                             type: 'update-business-profile',
                             BusinessProfile
                         }));