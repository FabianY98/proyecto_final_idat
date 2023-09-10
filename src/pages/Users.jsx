import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';
import { NavLink } from 'react-router-dom';

export const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
			setUsers(data);
		};

		fetchUsers();
	}, []);

	const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users'
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
			<h2>Usuarios</h2>
			<ul className="grid-layout">
				{users.map((user) => (
					<div className="rounded-container" title="Contactar usuario" key={user.id}>
						<img src={`https://picsum.photos/100?nombre=${user.id}`} alt="" className="avatar"/>
						<h3>{user.name}</h3>
						<p className="email-address">📧 {user.email}</p>
						<p className="small-text">📞 {user.phone}</p>
						<p className="small-text">🌎 {user.address.city}</p>
					</div>
			))}
			</ul>
		</div>
	);
};

export default Users;
