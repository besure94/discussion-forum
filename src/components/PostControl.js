import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
  }
  handleSubmittingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({mainPostList: newMainPostList,
    formVisibleOnPage: false});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostSubmission={this.handleSubmittingNewPostToList}/>
      buttonText = "Return to Home";
    } else {
      currentlyVisibleState = <PostList postList={this.state.mainPostList}/>
      buttonText = "Submit Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default PostControl;