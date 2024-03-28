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
});