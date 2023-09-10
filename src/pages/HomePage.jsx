import { NavLink } from 'react-router-dom';


export const HomePage = () => {

	return (
		<div className="initial-grid">
			<h1> Proyecto Final Frontend React Idat - Consumo de API JSON Place Holder </h1>
			<section>
				<div className="resource-links">
					<NavLink to="/post">	Ver Post</NavLink>
					<NavLink to="/albums">Ver Albumes</NavLink>
					<NavLink to="/photos">Ver Fotos</NavLink>
					<NavLink to="/todos">Ver To-dos</NavLink>
					<NavLink to="/users">Ver Usuarios</NavLink>
					<NavLink to="/comments">Ver Comentarios</NavLink>
				</div>
				<footer></footer>
			</section>
		</div>
	);
};
export default HomePage;