import React from "react";

function Post() {
  const post = "Humpback whale off of the Alaskan coast";
  const post2 = "Deftones playing live on Conan O'Brien in 1998";
  return (
    <React.Fragment>
      <h3>{post}</h3>
      <h3>{post2}</h3>
      <hr/>
    </React.Fragment>
  );
}

export default Post;