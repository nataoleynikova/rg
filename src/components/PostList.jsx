import React from "react";
import Post from "./Post";

const PostList = ({posts}) => {
	return (
		<div>
			<h1>Список постов</h1>
			
      {posts.map((post) => 
        <Post post={post} key={post.id}/>
      )}
		</div>
	);
};

export default PostList;