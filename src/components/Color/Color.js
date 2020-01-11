import React from 'react';
import './Color.scss';
import convert from 'color-convert';

export default ({ color }) => (
	<div className="color" style={{ background: color.code, color: color.font ? color.font : null }}>
		<div className="color__name">{color.name}</div>
		<div className="color__code">hex: {color.code}</div>
		<div className="color__code">rgb: {convert.hex.rgb(color.code)[0]}, {convert.hex.rgb(color.code)[1]}, {convert.hex.rgb(color.code)[2]}</div>
		<div className="color__code">hsl: {convert.hex.hsl(color.code)[0]}, {convert.hex.hsl(color.code)[1]}, {convert.hex.hsl(color.code)[2]}</div>
	</div>
)