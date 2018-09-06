import React, { Component } from 'react'

import './style.css'

function moviesLayout(props) {
	return (
		<section className='movies'>
			<div className='container'>
				{props.children}
			</div>
		</section>
	)
}

export default moviesLayout
