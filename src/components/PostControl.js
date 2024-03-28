import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from "./EditPostForm";

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleSubmittingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({mainPostList: newMainPostList,
    formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingSelectedPost = (id) => {
    const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null
    });
  }

  handleEditingSelectedPost = (postToEdit) => {
    const editedMainPostList = this.state.mainPostList
    .filter(post => post.id !== this.state.selectedPost.id)
    .concat(postToEdit);
    this.setState({
      mainPostList: editedMainPostList,
      editing: false,
      selectedPost: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditPostForm post = {this.state.selectedPost}
      onEditingPost = {this.handleEditingSelectedPost}/>
      buttonText = "Return to Home";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post={this.state.selectedPost}
      onClickingEdit={this.handleEditClick}
      onClickingDelete={this.handleDeletingSelectedPost}/>
      buttonText = "Return to Home";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostSubmission={this.handleSubmittingNewPostToList}/>
      buttonText = "Return to Home";
    } else {
      currentlyVisibleState = <PostList postList={this.state.mainPostList}
      onPostSelection={this.handleChangingSelectedPost}/>
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