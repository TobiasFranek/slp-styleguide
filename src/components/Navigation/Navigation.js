import React, { useState } from 'react';
import './Navigation.scss';
import { useStaticQuery, graphql, Link } from 'gatsby';



export default ({ onToggle }) => {
	const pages = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				nodes {
					frontmatter {
						category
						path
						title
					}
				}
			}
		}
	`);

	let nav = {};


	for (let page of pages.allMarkdownRemark.nodes) {
		if (nav[page.frontmatter.category]) {
			nav[page.frontmatter.category].push(page.frontmatter)
		} else {
			nav[page.frontmatter.category] = [ page.frontmatter ];
		}
	}

	const buildList = (items) => items.map((item) => (
		<li className="gatsby-nav__ul__li" key={item.path}>
			<Link activeClassName="active" to={`${item.path}/`}>{item.title}</Link>
		</li>
	));

	const [ open, setOpen ] = useState(false);

	const toggleNav = () => {
		const newState = !open;
		setOpen(newState);
		if (onToggle) {
			onToggle(newState);
		}
	}

	return (
		<>
			<button className="btn menu-open" onClick={toggleNav}>
				<span className="icon btn__icon btn__item">
					{open ? 
						<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="icon__svg svg-inline--fa fa-times fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
					:
						<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bars" class="icon__svg svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path></svg>					
					}
				</span>
			</button>
			<nav className={`gatsby-nav${open ? ' gatsby-nav--open' : ''}`}>
				<ul className="gatsby-nav__ul">
					{buildList(nav['index'])}
				</ul>
				<h2>Foundations</h2>
				<ul className="gatsby-nav__ul">
					<li className="gatsby-nav__ul__li">
						<Link activeClassName="active" to="/foundations/colors/">Colors</Link>
					</li>
					{buildList(nav['foundations'])}
				</ul>
				<h2>CSS Methodology</h2>
				<ul className="gatsby-nav__ul">
					{buildList(nav['methodology'])}
				</ul>
				<h2>Components</h2>
				<ul className="gatsby-nav__ul">
					{buildList(nav['components'])}
				</ul>
			</nav>
		</>
	)
}