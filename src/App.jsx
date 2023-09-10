// import React from 'react';
// import { BrowserRouter as Routes, Route, Switch, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Posts from './pages/Posts'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Users } from './pages/Users';
import { Posts } from './pages/Posts';
import { Comments } from './pages/Comments';
import { Albums } from './pages/Albums';
import { Photos } from './pages/Photos';
import { Todos } from './pages/Todos';
import { NotFoundPage } from './pages/NotFoundPage';
export default function App() {
	return (
		<Routes>
			<Route path="/" exact={true} element={<HomePage />} />
			<Route path="/users" exact={true} element={<Users />} />
			<Route path="/post" exact={true} element={<Posts />} />
			<Route path="/comments" exact={true} element={<Comments />} />
			<Route path="/albums" exact={true} element={<Albums />} />
			<Route path="/photos" exact={true} element={<Photos />} />
			<Route path="/todos" exact={true} element={<Todos />} />
			<Route path="/*" exact={true} element={<NotFoundPage />} />
		</Routes>
	);
}