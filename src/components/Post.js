import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h2>{props.title}</h2>
        <h4>Submitted by <em>{props.author}</em> in {props.forum} on {props.timePosted.toDateString()}</h4>
        <h4>{props.upvotes} Upvotes</h4>
        <h4>{props.downvotes} Downvotes</h4>
        <h4>{props.elapsedTime}</h4>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  forum: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  timePosted: PropTypes.instanceOf(Date),
  elapsedTime: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}

export default Post;