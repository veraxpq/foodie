import my_comments from './data/myComments.json';

const myComments = (state = my_comments, action) => {
    console.log("state",state)
    // console.log("action.comment",action.comment)
    switch (action.type) {
        case 'fetch-all-comments':
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
                _id: (new Date()).getTime() + '',
                "time_created": "12/15/2021",
                ...action.comment,
            };
            return ([
                comment,
                ...state,
            ]);

        default:
            return(state);
    }
};

export default myComments;