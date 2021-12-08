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

        case 'create-comment':
            const comment = {
                _id: (new Date()).getTime() + '',
                "restaurant_name": "The Dolar Shop",
                "rating": 4,
                "time_created": "12/8/2021",
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