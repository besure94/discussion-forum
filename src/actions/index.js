import * as constants from './ActionTypes';

export const deletePost = (id) => ({
  type: constants.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: constants.TOGGLE_FORM
});

export const submitPost = (post) => {
  const { title, author, date, forum, upvotes, downvotes, id }  = post;
  return {
    type: constants.SUBMIT_POST,
    title: title,
    author: author,
    date: date,
    forum: forum,
    upvotes: upvotes,
    downvotes: downvotes,
    id: id
  }
};