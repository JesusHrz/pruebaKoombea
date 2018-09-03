import React, { Component } from 'react'

import './style.css'

function MoviesLayout(props) {
	return (
		<section className='Movies container'>
				{props.children}
		</section>
	)
}

export default MoviesLayout
