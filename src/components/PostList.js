import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      {props.postList.map((post, index) =>
        <Post
          author={post.author}
          title={post.title}
          forum={post.forum}
          date={post.date}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          key={index}/>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
}

export default PostList;