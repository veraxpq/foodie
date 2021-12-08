import logInJSON from './data/LognIn.json'

const userInfo = (state = logInJSON, action) => {
    switch (action.type) {
        case 'fetch-all-user-info':
            return( action.user);
            break;

        case 'check-log-in-status':
            console.log("in reducer", action.data)

            if (action.data.status===0){
                console.log("wrong password!")
                return {
                    ...state,
                    "status":action.data.status,
                    "errorMsg": "Wrong password!"}
            } else if (action.data.status===1){
                console.log("correct password")
                return action.data.data;
            } else {
                return state;
            }

            // const newState = [action.user];
            // return newState;

            break;



        default:
            return state;
    }

};



export default userInfo;