import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h2>{post.title}</h2>
      <h4>Submitted by ~ {post.author} ~ on {post.date} in / {post.forum} /</h4>
      <h4>{post.upvotes} Upvotes</h4>
      <h4>{post.downvotes} Downvotes</h4>
      <button onClick={() => onClickingEdit(post.id)}>Edit</button>
      <br/>
      <button onClick={() => onClickingDelete(post.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;