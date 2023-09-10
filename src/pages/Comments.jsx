import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';
import { NavLink } from 'react-router-dom';

export const Comments = () => {
	const [comments, setComments] = useState([]);
	const [valueC, setValueC] = useState(18);

	useEffect(() => {
		const fetchComments = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments');
			setComments(data);
		};

		fetchComments();
	}, []);

	const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/comments'
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

	const btnNextC = () => {
		setValueC(valueC + 18);
	};

	return (
		<div className="box">
			<h2>Comentarios</h2>
			<NavLink to="/">Volver a Inicio</NavLink>
			<button onClick={btnNextC} className="button_1">
				Cargar más...
			</button>
			{comments.slice(0,valueC).map((comment) => (
				<div className="single-block-layout" key={comment.id}>
					<h3>{comment.name}</h3>
					<p className="paragraphs">{comment.body}</p>
				</div>
			))}
		</div>
	);
};

export default Comments;
