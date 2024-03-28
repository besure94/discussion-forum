import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    title: 'Went fishing in Boca Raton',
    author: 'agingFisherman',
    date: '5/14/2023',
    forum: 'Outdoors',
    upvotes: 0,
    downvotes: 0,
    id: 1
  };

  const currentState = {
    1: {
      title: 'Live performance by Deftones on Conan 1998',
      author: 'punkorama',
      date: '9/12/2018',
      forum: 'Metal',
      upvotes: 0,
      downvotes: 0,
      id: 1
    }, 2: {
      title: 'Went fishing in Boca Raton',
      author: 'agingFisherman',
      date: '5/14/2023',
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
    const { title, author, date, forum, upvotes, downvotes, id } = postData;
    action = {
      type: 'SUBMIT_POST',
      title: title,
      author: author,
      date: date,
      forum: forum,
      upvotes: upvotes,
      downvotes: downvotes,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
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
  });

  test('Should successfully delete a new post from the post list.', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };

    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title: 'Went fishing in Boca Raton',
        author: 'agingFisherman',
        date: '5/14/2023',
        forum: 'Outdoors',
        upvotes: 0,
        downvotes: 0,
        id: 2
      }
    });
  });
});