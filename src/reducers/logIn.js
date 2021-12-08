import logInJSON from './data/LognIn.json'

const userInfo = (state = logInJSON, action) => {
    switch (action.type) {
        case 'fetch-all-user-info':
            return( action.user);
            break;

        case 'check-log-in-status':
            console.log("in reducer", action)

            if (action.response.status===0){
                console.log("wrong password!")
                return {
                    ...state,
                    "status":action.response.status,
                    "errorMsg": "Wrong password!"}
            }

            if (action.response.status===1){
                return action.data;

            }

            // const newState = [action.user];
            // return newState;

            break;



        default:
            return state;
    }

};



export default userInfo;