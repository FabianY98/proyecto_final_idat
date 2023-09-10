import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useFetch } from '../hooks/useFetch';
import { NavLink } from 'react-router-dom';

export const Todos = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
			console.log(data);
			setTodos(data);
		};

		fetchTodos();
	}, []);

	const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/todos'
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

	return (
		<div className="box">
			<NavLink to="/">Volver a Inicio</NavLink>
			<h2>Tareas</h2>
			<ul className="grid-layout" >
				{todos.map((todo) => (
					<li className="tasks" key={todo.id}>
						<input type="checkbox" checked={todo.completed} readOnly />
						<span className="floating-text">{todo.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Todos;
