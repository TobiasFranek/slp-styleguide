import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg'
import { Link } from 'gatsby';

export default () => {
	
	return (
		<header className="gatsby-header">
			<div className="content">
				<Link to="/" className="gatsby-header__link">
					<img className="gatsby-header__logo" src={logo} />
					<h1> - Styleguide</h1>
				</Link>
			</div>
		</header>
	);
}