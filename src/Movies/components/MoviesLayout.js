import React, { Component } from 'react'

import './style.css'

function MoviesLayout(props) {
	return (
		<section className='Movies container'>
			<h1 className='Movies_title'>Descubre Nuevas Películas</h1>
			{props.children}
		</section>
	)
}

export default MoviesLayout
