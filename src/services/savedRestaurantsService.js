const SAVE_API = 'https://foodie-mysql-database.herokuapp.com/foodie';


export const addSaved = (dispatch, save) =>
    fetch(SAVE_API, {
      method: 'POST',
      body: JSON.stringify(save),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(saved =>
        dispatch({
          type: 'save',
          saved
        })
    );


