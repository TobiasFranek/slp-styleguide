import React from 'react';
import './Navigation.scss';
import { useStaticQuery, graphql, Link } from 'gatsby';



export default () => {
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
		<li className="gatsby-nav__ul__li">
			<Link activeClassName="active" to={`${item.path}/`}>{item.title}</Link>
		</li>
	));

	return (
		<nav className="gatsby-nav">
			<h2>Foundations</h2>
			<ul className="gatsby-nav__ul">
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
	)
}