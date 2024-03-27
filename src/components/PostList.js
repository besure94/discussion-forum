import React from "react";
import Post from "./Post";

const mainPostList = [
  {
    author: "fotograffer",
    title: "Sunset in Laguna Beach",
    forum: "nature",
    date: "2/2/2022",
    upvotes: "145",
    downvotes: "24"
  },
  {
    author: "vinyln3rd",
    title: "Reissue of Around the Fur by Deftones",
    forum: "music",
    date: "4/25/2021",
    upvotes: "1787",
    downvotes: "0"
  },
  {
    author: "rockGeek",
    title: "Went rockhounding in Arizona",
    forum: "geology",
    date: "1/1/2024",
    upvotes: "17",
    downvotes: "0"
  }
];

function PostList() {
  return (
    <React.Fragment>
      {mainPostList.map((post, index) =>
        <Post
          author={post.author}
          title={post.title}
          forum={post.forum}
          date={post.date}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default PostList;