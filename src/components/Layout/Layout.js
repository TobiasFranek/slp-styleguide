import React, { useState, useEffect } from 'react';
import './Layout.scss';
import '../../scss/main.scss';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

export default ({ children }) => {
	const [ navOpen, setNavOpen ] = useState(false);

	useEffect(() => {
		if (navOpen) {
			document.querySelector('body').classList.add('no-scroll');
		} else {
			document.querySelector('body').classList.remove('no-scroll');
		}
	}, [navOpen])

	return (
		<>
			<Header />
			<div className="wrapper content">
				<Navigation onToggle={(state) => setNavOpen(state)}/>
				<main className="main-content">
					{children}
				</main>
			</div>
		</>
	)
}