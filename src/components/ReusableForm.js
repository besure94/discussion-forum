import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
            name="forum"
            placeholder="Forum"
            required/>
          <br/>
          <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;