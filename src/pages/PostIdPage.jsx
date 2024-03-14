import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useNavigate } from "react-router-dom";

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const router = useNavigate();
	
	const useFetching = (callback) => {
		const fetching = async (...args) => {
			try {
				await callback(...args)
			} catch (e) {
			} finally {
			};
		};

		return fetching;
	};

	const fetchPostById = useFetching(async (id) => {
		const responce = await PostService.getById(id)
		setPost(responce.data);
	});

	useEffect(() => {
		fetchPostById(params.id)
	}, []);


	return (
		<div className="post_id_page">
			<h1>Страница поста № {post.id}</h1>

			<div>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
			</div>
			
			<button onClick={() => router(`/`)}>Назад</button>
		</div>
	);
};

export default PostIdPage;