import React from "react";
import Post from "./Post";

function PostList() {
  return (
    <React.Fragment>
      <Post
        author="fotograffer"
        title="Sunset in Laguna Beach"
        forum="nature"
        date="2/2/2022"
        upvotes="145"
        downvotes="24"/>
      <Post
        author="vinyln3rd"
        title="Reissue of Around the Fur by Deftones"
        forum="music"
        date="4/25/2021"
        upvotes="1787"
        downvotes="0"/>
    </React.Fragment>
  );
}

export default PostList;