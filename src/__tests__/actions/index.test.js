import * as actions from './../../actions';

describe('Discussion Forum actions', () => {
  it('deletePost should create DELETE_POST action.', () => {
    expect(actions.deletePost(1)).toEqual({
      type: 'DELETE_POST',
      id: 1
    });
  });

  it('toggleForm should toggle state between post list and form to submit a post.', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('submitPost should submit a post to the post list.', () => {
    expect(actions.submitPost({
      title: "Sunset from last night.",
      author: "funnyhow94",
      date: "5/5/2021",
      forum: "pics",
      upvotes: 0,
      downvotes: 0,
      id: 1
    })).toEqual({
      type: 'SUBMIT_POST',
      title: "Sunset from last night.",
      author: "funnyhow94",
      date: "5/5/2021",
      forum: "pics",
      upvotes: 0,
      downvotes: 0,
      id: 1
    });
  });
});