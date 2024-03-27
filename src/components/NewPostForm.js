import React from "react";

function NewPostForm(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.author.value);
    console.log(event.target.date.value);
    console.log(event.target.forum.value);
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

export default NewPostForm;