import React, { Component, Fragment } from 'react'

import './style.css'

function HomeLayout(props) {
	return (
		<Fragment>
				{props.children}
		</Fragment>
	)
}

export default HomeLayout
