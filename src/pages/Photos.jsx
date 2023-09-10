import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';
import { NavLink } from 'react-router-dom';


export const Photos = () => {
	const [photos, setPhotos] = useState([]);
	const [value, setValue] = useState(18);

	useEffect(() => {
		const fetchPhotos = async () => {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
			setPhotos(data);
		};

		fetchPhotos();
	}, []);

	const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/photos');
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
		</div>;
	}
	const btnNext = () => {
		setValue(value + 18);
	};

	return (
		<div className="box">
			<h2>Fotos</h2>
			<NavLink to="/">Volver a Inicio</NavLink>
			<button onClick={btnNext} className="button_1">
				Cargar más...
			</button>
			<ul className="grid-layout">
				{photos.slice(0, value).map((photo) => (
					<li className="rounded-container" key={photo.id}>
						<img className="pics" src={photo.thumbnailUrl} alt={photo.title} />
						<p className="floating-text">{photo.title}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Photos;