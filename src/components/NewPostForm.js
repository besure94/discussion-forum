import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';
import { formatDistanceToNow } from "date-fns";

function NewPostForm(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostSubmission({
      title: event.target.title.value,
      author: event.target.author.value,
      forum: event.target.forum.value,
      upvotes: 0,
      downvotes: 0,
      timePosted: new Date(),
      elapsedTime: formatDistanceToNow(new Date(), {
        addSuffix: true
      }),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h2>Submit a post</h2>
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText = "Submit"/>
      <hr/>
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostSubmission: PropTypes.func
}

export default NewPostForm;