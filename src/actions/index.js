import * as constants from './ActionTypes';

export const deletePost = (id) => ({
  type: constants.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: constants.TOGGLE_FORM
});

export const submitPost = (post) => {
  const { title, author, forum, upvotes, downvotes, timePosted, elapsedTime, id }  = post;
  return {
    type: constants.SUBMIT_POST,
    title: title,
    author: author,
    forum: forum,
    upvotes: upvotes,
    downvotes: downvotes,
    timePosted: timePosted,
    elapsedTime: elapsedTime,
    id: id
  }
};

export const updateTime = (id, elapsedTime) => ({
  type: constants.UPDATE_TIME,
  id: id,
  elapsedTime: elapsedTime
});