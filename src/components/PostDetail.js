import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post } = props;

  return (
    <React.Fragment>
      <h1>Post Details</h1>
      <h3>{post.title}</h3>
      <h3>Submitted by ~ {post.author} ~ on {post.date} in / {post.forum} /</h3>
      <h3>{post.upvotes} Upvotes</h3>
      <h3>{post.downvotes} Downvotes</h3>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object
};

export default PostDetail;