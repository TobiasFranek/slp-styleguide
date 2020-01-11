import React from 'react';
import './Layout.scss';
import '../../assets/scss/main.scss';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

export default ({ children }) => (
	<>
		<Header />
		<div className="wrapper container">
			<Navigation />
			<main className="main-content">
				{children}
			</main>
		</div>
	</>
)