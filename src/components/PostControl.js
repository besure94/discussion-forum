import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from "./EditPostForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from './../actions';
import { formatDistanceToNow } from 'date-fns';
import { act } from "react-dom/test-utils";

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  componentDidMount() {
    this.timeUpdater = setInterval(() =>
      this.updateElapsedTime(), 60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeUpdater);
  }

  updateElapsedTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.mainPostList).forEach(post => {
      const newTime = formatDistanceToNow(post.timePosted, {
        addSuffix: true
      });
      const action = actions.updateTime(post.id, newTime);
      dispatch(action);
    });
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = actions.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleSubmittingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = actions.submitPost(newPost);
    dispatch(action);
    const action2 = actions.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingSelectedPost = (id) => {
    const { dispatch } = this.props;
    const action = actions.deletePost(id);
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleEditingSelectedPost = (postToEdit) => {
    const { dispatch } = this.props;
    const action = actions.submitPost(postToEdit);
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
    } else if (this.props.formVisibleOnPage) {
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
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;