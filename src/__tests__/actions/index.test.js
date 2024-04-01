import * as actions from './../../actions';
import * as constants from '../../actions/ActionTypes';


describe('Discussion Forum actions', () => {
  it('deletePost should create DELETE_POST action.', () => {
    expect(actions.deletePost(1)).toEqual({
      type: constants.DELETE_POST,
      id: 1
    });
  });

  it('toggleForm should toggle state between post list and form to submit a post.', () => {
    expect(actions.toggleForm()).toEqual({
      type: constants.TOGGLE_FORM
    });
  });

  it('submitPost should submit a post to the post list.', () => {
    expect(actions.submitPost({
      title: "Sunset from last night.",
      author: "funnyhow94",
      forum: "pics",
      upvotes: 0,
      downvotes: 0,
      timePosted: 'less than a minute ago',
      id: 1
    })).toEqual({
      type: constants.SUBMIT_POST,
      title: "Sunset from last night.",
      author: "funnyhow94",
      forum: "pics",
      upvotes: 0,
      downvotes: 0,
      timePosted: 'less than a minute ago',
      id: 1
    });
  });
});