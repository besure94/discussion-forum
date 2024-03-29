export const deletePost = (id) => ({
  type: 'DELETE_POST',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const submitPost = (post) => {
  const { title, author, date, forum, upvotes, downvotes, id }  = post;
  return {
    type: 'SUBMIT_POST',
    title: title,
    author: author,
    date: date,
    forum: forum,
    upvotes: upvotes,
    downvotes: downvotes,
    id: id
  }
};