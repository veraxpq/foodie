import my_comments from './data/myComments.json';


const myComments = (state = my_comments, action) => {
    switch (action.type) {
        case 'fetch-all-comments':
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
            state.data.push(action.newComment);
            return (
                state
            );
            break;

        default:
            return(state);
    }
};

export default myComments;