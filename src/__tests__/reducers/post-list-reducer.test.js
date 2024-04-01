import postListReducer from '../../reducers/post-list-reducer';
import * as constants from '../../actions/ActionTypes';
import { formatDistanceToNow } from 'date-fns';

describe('postListReducer', () => {

  let action;
  const postData = {
    title: 'Went fishing in Boca Raton',
    author: 'agingFisherman',
    forum: 'Outdoors',
    upvotes: 0,
    downvotes: 0,
    timePosted: new Date(),
    elapsedTime: formatDistanceToNow(new Date(), {
      addSuffix: true
    }),
    id: 1
  };

  const currentState = {
    1: {
      title: 'Live performance by Deftones on Conan 1998',
      author: 'punkorama',
      forum: 'Metal',
      upvotes: 0,
      downvotes: 0,
      id: 1
    }, 2: {
      title: 'Went fishing in Boca Raton',
      author: 'agingFisherman',
      forum: 'Outdoors',
      upvotes: 0,
      downvotes: 0,
      id: 2
    }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully submit a new post to the post list.', () => {
    const { title, author, forum, upvotes, downvotes, timePosted, elapsedTime, id } = postData;
    action = {
      type: constants.SUBMIT_POST,
      title: title,
      author: author,
      forum: forum,
      upvotes: upvotes,
      downvotes: downvotes,
      timePosted: timePosted,
      elapsedTime: elapsedTime,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        author: author,
        forum: forum,
        upvotes: upvotes,
        downvotes: downvotes,
        timePosted: timePosted,
        elapsedTime: 'less than a minute ago',
        id: id
      }
    });
  });

  test('Should successfully delete a new post from the post list.', () => {
    action = {
      type: constants.DELETE_POST,
      id: 1
    };

    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title: 'Went fishing in Boca Raton',
        author: 'agingFisherman',
        forum: 'Outdoors',
        upvotes: 0,
        downvotes: 0,
        id: 2
      }
    });
  });

  test('Should add a timestamp with timer to a submitted post.', () => {
    const { title, author, forum, upvotes, downvotes, timePosted, id } = postData;
    action = {
      type: constants.UPDATE_TIME,
      elapsedTime: '5 minutes ago',
      id: id
    };

    expect(postListReducer({ [id]: postData}, action)).toEqual({
      [id]: {
        title: title,
        author: author,
        forum: forum,
        upvotes: upvotes,
        downvotes: downvotes,
        timePosted: timePosted,
        elapsedTime: '5 minutes ago',
        id: id
      }
    });
  });

  test('Should increase the upvotes property for a post by 1 when the user clicks "upvote".', () => {
    const { title, author, forum, upvotes, downvotes, timePosted, elapsedTime, id } = postData;
    action = {
      type: constants.UPVOTE_POST,
      title: title,
      author: author,
      forum: forum,
      upvotes: upvotes,
      downvotes: downvotes,
      timePosted: timePosted,
      elapsedTime: elapsedTime,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        author: author,
        forum: forum,
        upvotes: 1,
        downvotes: downvotes,
        timePosted: timePosted,
        elapsedTime: 'less than a minute ago',
        id: id
      }
    });
  });

  test('Should decrease the downvotes property for a post by 1 when a user clicks "downvote".', () => {
    const { title, author, forum, upvotes, downvotes, timePosted, elapsedTime, id } = postData;
    action = {
      type: constants.DOWNVOTE_POST,
      title: title,
      author: author,
      forum: forum,
      upvotes: upvotes,
      downvotes: downvotes,
      timePosted: timePosted,
      elapsedTime: elapsedTime,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        author: author,
        forum: forum,
        upvotes: upvotes,
        downvotes: -1,
        timePosted: timePosted,
        elapsedTime: 'less than a minute ago',
        id: id
      }
    });
  });

});