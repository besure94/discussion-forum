import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.title}</h3>
        <h4>Submitted by ~ {props.author} ~ on {props.date} in / {props.forum} /</h4>
        <h4>Upvotes: {props.upvotes}</h4>
        <h4>Downvotes: {props.downvotes}</h4>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  forum: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}

export default Post;