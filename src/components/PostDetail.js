import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Post Details</h1>
      <h3>{post.title}</h3>
      <h3>Submitted by ~ {post.author} ~ on {post.date} in / {post.forum} /</h3>
      <h3>{post.upvotes} Upvotes</h3>
      <h3>{post.downvotes} Downvotes</h3>
      <button onClick={() => onClickingDelete(post.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default PostDetail;