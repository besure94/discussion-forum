import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from "./EditPostForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
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
    const { dispatch } = this.props;
    const { id, title, author, date, forum, upvotes, downvotes } = newPost;
    const action = {
      type: 'SUBMIT_POST',
      id: id,
      title: title,
      author: author,
      date: date,
      forum: forum,
      upvotes: upvotes,
      downvotes: downvotes
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingSelectedPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleEditingSelectedPost = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, title, author, date, forum, upvotes, downvotes } = postToEdit;
    const action = {
      type: 'SUBMIT_POST',
      id: id,
      title: title,
      author: author,
      date: date,
      forum: forum,
      upvotes: upvotes,
      downvotes: downvotes
    }
    dispatch(action);
    this.setState({
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
      currentlyVisibleState = <PostList postList={this.props.mainPostList}
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

PostControl.propTypes = {
  mainPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainPostList: state
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;