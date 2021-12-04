import my_comments from './data/myComments.json';

const myComments = (state = my_comments, action) => {
    switch (action.type) {
        case 'fetch-all-comments':

            return(action.comments);
            break;


        case 'delete-comment':
            return (
                state.filter(comment => comment._id !== action.comment._id)
            )
            break;



        default:
            return(state);
    }
};

export default myComments;