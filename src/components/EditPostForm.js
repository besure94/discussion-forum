import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPostForm(props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditingPost({
      title: event.target.title.value,
      author: event.target.author.value,
      date: event.target.date.value,
      forum: event.target.date.value,
      upvotes: 0,
      downvotes: 0,
      id: post.id
    })
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Edit"/>
      <hr/>
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditingPost: PropTypes.func,
}

export default EditPostForm;