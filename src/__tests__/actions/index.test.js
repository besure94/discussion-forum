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
      timePosted: 0,
      elapsedTime: 'less than a minute ago',
      id: 1
    })).toEqual({
      type: constants.SUBMIT_POST,
      title: "Sunset from last night.",
      author: "funnyhow94",
      forum: "pics",
      upvotes: 0,
      downvotes: 0,
      timePosted: 0,
      elapsedTime: 'less than a minute ago',
      id: 1
    });
  });

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, 'less than a minute ago')).toEqual({
      type: constants.UPDATE_TIME,
      id: 1,
      elapsedTime: 'less than a minute ago'
    });
  });

  it('upvotePost should create UPVOTE_POST action', () => {
    expect(actions.upvotePost({
      title: "Sunset from last night.",
      author: "funnyhow94",
      forum: "pics",
      upvotes: 0,
      downvotes: 0,
      timePosted: 0,
      elapsedTime: 'less than a minute ago',
      id: 1
    })).toEqual({
      type: constants.UPVOTE_POST,
      title: "Sunset from last night.",
      author: "funnyhow94",
      forum: "pics",
      upvotes: 1,
      downvotes: 0,
      timePosted: 0,
      elapsedTime: 'less than a minute ago',
      id: 1
    });
  });

  it('downvotePost should create DOWNVOTE_POST action', () => {
    expect(actions.downvotePost({
      title: "Sunset from last night.",
      author: "funnyhow94",
      forum: "pics",
      upvotes: 0,
      downvotes: 0,
      timePosted: 0,
      elapsedTime: 'less than a minute ago',
      id: 1
    })).toEqual({
      type: constants.DOWNVOTE_POST,
      title: "Sunset from last night.",
      author: "funnyhow94",
      forum: "pics",
      upvotes: 0,
      downvotes: -1,
      timePosted: 0,
      elapsedTime: 'less than a minute ago',
      id: 1
    });
  });

});