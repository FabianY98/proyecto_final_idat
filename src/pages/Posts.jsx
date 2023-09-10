import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';
import { NavLink } from 'react-router-dom';

export const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [valueP, setValueP] = useState(18);

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/');
			setPosts(data);
		};

		fetchPosts();
	}, []);

	const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts'
	);
	if (isLoading) {
		return (
			<div className="layout-centered">
				<p>Cargando...</p>
				<section className="loadingLogo"></section>
			</div>
		);
	}
	if (error) {
		<div>
			<p>Ocurrió un error {JSON.stringify(error)}</p>
		</div>
	}

	const btnNextP = () => {
		setValueP(valueP + 18);
	};

	return (
		<div className="box">
			<h2>Publicaciones</h2>
			<NavLink to="/">Volver a Inicio</NavLink>
			<button onClick={btnNextP} className="button_1">
				Cargar más...
			</button>
			<ul className="transparent-block">
				{posts.slice(0,valueP).map((post) => (
					<li  className="single-block-layout" key={post.id}>
						<h3>{post.title}</h3>
						<p className="floating-text">{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
