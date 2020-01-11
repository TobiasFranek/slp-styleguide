import React from 'react';
import './Layout.scss';
import '../../scss/main.scss';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

export default ({ children }) => (
	<>
		<Header />
		<div className="wrapper content">
			<Navigation />
			<main className="main-content">
				{children}
			</main>
		</div>
	</>
)