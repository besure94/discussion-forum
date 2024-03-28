import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) =>
        <Post
          whenPostClicked = {props.onPostSelection}
          author={post.author}
          title={post.title}
          forum={post.forum}
          date={post.date}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          id={post.id}
          key={post.id}/>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
}

export default PostList;