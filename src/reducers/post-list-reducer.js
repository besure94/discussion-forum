import * as constants from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { title, author, forum, upvotes, downvotes, timePosted, elapsedTime, id } = action;
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
          elapsedTime: elapsedTime,
          id: id
        }
      });

    case constants.DELETE_POST:
      let newState = {...state};
      delete newState[id];
      return newState;

    case constants.UPDATE_TIME:
      const newPost = Object.assign({}, state[id], {elapsedTime});
      const updatedState = Object.assign({}, state, {
        [id]: newPost
      });
      return updatedState;

    case constants.UPVOTE_POST:
      return Object.assign({}, state, {
        [id]: {
          title: title,
          author: author,
          forum: forum,
          upvotes: upvotes,
          downvotes: downvotes,
          timePosted: timePosted,
          elapsedTime: elapsedTime,
          id: id
        }
      });

    case constants.DOWNVOTE_POST:
      return Object.assign({}, state, {
        [id]: {
          title: title,
          author: author,
          forum: forum,
          upvotes: upvotes,
          downvotes: downvotes + 1,
          timePosted: timePosted,
          elapsedTime: elapsedTime,
          id: id
        }
      });

    default:
      return state;
  }
};

export default reducer;