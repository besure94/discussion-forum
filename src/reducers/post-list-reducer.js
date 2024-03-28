const reducer = (state = {}, action) => {
  const { title, author, date, forum, upvotes, downvotes, id } = action;
  switch (action.type) {
    case 'SUBMIT_POST':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          author: author,
          date: date,
          forum: forum,
          upvotes: upvotes,
          downvotes: downvotes,
          id: id
        }
      });
    case 'DELETE_POST':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;