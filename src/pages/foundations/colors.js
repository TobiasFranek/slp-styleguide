import React from "react"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import Color from "../../components/Color/Color";

export default () => {
	const colors = [
		{
			name: 'Main Colors',
			colors: [
				{
					name: 'Primary',
					code: '#3B497E'
				},
				{
					name: 'Primary light',
					code: '#EBEBFF',
					font: '#333'
				},
				{
					name: 'Secondary',
					code: '#00175E'
				},
				{
					name: 'Font color',
					code: '#333'
				}
			]
		},
		{
			name: 'Greys',
			colors: [
				{
					name: 'Grey 1',
					code: '#555'
				},
				{
					name: 'Grey 2',
					code: '#707070'
				},
				{
					name: 'Light grey',
					code: '#cecece',
					font: '#333'
				}
			]
		},
		{
			name: 'Utility Colors',
			colors: [
				{
					name: 'Success',
					code: '#00BA39'
				},
				{
					name: 'Error',
					code: '#D61E1E'
				},
				{
					name: 'Red',
					code: '#D82E2E'
				},
			]
		}
	];


	return (
		<Layout>
			<Seo title="Colors"/>
			<h1>Colors</h1>
			{colors.map((colorGroup) => (
				<>
					<h2>{colorGroup.name}</h2>
					{colorGroup.colors.map((color) => (
						<Color color={color} />
					))}
				</>
			))}
		</Layout>
	)
};