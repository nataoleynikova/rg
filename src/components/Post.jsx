import React from "react";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
	const router = useNavigate();

	return (
		<div className="post">
			<div className="post_content">
				<p><span>{props.post.id}.</span> {props.post.title}</p>
			</div>

			<button onClick={() => router(`/post/${props.post.id}`)}>
				Открыть пост
			</button>
		</div>
	);
};

export default Post;