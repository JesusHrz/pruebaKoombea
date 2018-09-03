import React, { Component } from 'react'

import './style.css'

function HomeLayout(props) {
	return (
		<section>
				{props.children}
		</section>
	)
}

export default HomeLayout
