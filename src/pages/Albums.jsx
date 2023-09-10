import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';
import { NavLink } from 'react-router-dom';

 export const Albums = () => {
	const [albums, setAlbums] = useState([]);
	const [valueA, setValueA] = useState([50]);
	
	useEffect(() => {
		const fetchAlbums = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums');
			setAlbums(data);
		};

		fetchAlbums();
	}, []);

	const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/albums'
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

	const btnNextA = () => {
		setValueA(valueA + 50);
	};

	return (
		<div className="box">
			<h2>Álbumes</h2>
			<NavLink to="/">Volver a Inicio</NavLink>
			<button onClick={btnNextA} className="button_1">
				Cargar más...
			</button>
			<ul className="grid-layout">
				{albums.slice(0, valueA).map((album) => (
					<div className="rounded-container" key={album.id}>
						<p className="floating-text">{album.title}</p>
					</div>
				))}
			</ul>
		</div>
	);
};

export default Albums;
