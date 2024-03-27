import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewPostForm(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostSubmission({
      title: event.target.title.value,
      author: event.target.author.value,
      date: event.target.date.value,
      forum: event.target.forum.value,
      upvotes: 0,
      downvotes: 0,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>Submit a post</h3>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required/>
        <br/>
        <input
          type="text"
          name="author"
          placeholder="Author"
          required/>
        <br/>
        <input
          type="text"
          name="date"
          placeholder="Date"
          required/>
        <br/>
        <input
          type="text"
          name="forum"
          placeholder="Forum"
          required/>
        <br/>
        <button type="submit">Submit</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostSubmission: PropTypes.func
}

export default NewPostForm;