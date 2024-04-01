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
    timePosted: formatDistanceToNow(new Date()),
    id: 1
  };

  const currentState = {
    1: {
      title: 'Live performance by Deftones on Conan 1998',
      author: 'punkorama',
      forum: 'Metal',
      upvotes: 0,
      downvotes: 0,
      timePosted: formatDistanceToNow(new Date()),
      id: 1
    }, 2: {
      title: 'Went fishing in Boca Raton',
      author: 'agingFisherman',
      forum: 'Outdoors',
      upvotes: 0,
      downvotes: 0,
      timePosted: formatDistanceToNow(new Date()),
      id: 2
    }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully submit a new post to the post list.', () => {
    const { title, author, forum, upvotes, downvotes, timePosted, id } = postData;
    action = {
      type: constants.SUBMIT_POST,
      title: title,
      author: author,
      forum: forum,
      upvotes: upvotes,
      downvotes: downvotes,
      timePosted: timePosted,
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
        timePosted: formatDistanceToNow(new Date()),
        id: 2
      }
    });
  });

});