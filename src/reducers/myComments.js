import my_comments from './data/myComments.json';

const myComments = (state = my_comments, action) => {
    console.log("state",state)
    // console.log("action.comment",action.comment)
    switch (action.type) {
        case 'fetch-all-comments':
            console.log("action", action)
            console.log("action.comments",action.comments)
            return(action.comments);
            break;


        case 'delete-comment':
            console.log("state.data.filter",state.data.filter(comment => comment.id!== action.comment.id))
            // state.data=state.data.filter(comment => comment.id!== action.comment.id)
            return (
                // state.data.filter(comment => comment.id!== action.comment.id)
                {...state,"data":state.data.filter(comment => comment.id!== action.comment.id)}

            )
            break;

        case 'create-comment':
            const comment = {
                id: (new Date()).getTime() + '',
                "time_created": "12/15/2021",
                ...action.text,
                "rating": 3,
                "userId": 5,
                "username": "jose"
            };
            return (
                {...state,
                    "data":[action.comment, ...state.data]
                }
            );

        default:
            return(state);
    }
};

export default myComments;