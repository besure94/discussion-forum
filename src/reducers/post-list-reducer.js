import * as constants from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { title, author, forum, upvotes, downvotes, timePosted, id } = action;
  switch (action.type) {
    case constants.SUBMIT_POST:
      return Object.assign({}, state, {
        [id]: {
          title: title,
          author: author,
          forum: forum,
          upvotes: upvotes,
          downvotes: downvotes,
          timePosted: timePosted,
          id: id
        }
      });
    case constants.DELETE_POST:
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;