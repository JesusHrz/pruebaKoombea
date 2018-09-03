import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

function Header(props) {
	return(
		<header className='Header'>
			<div className='container'>
				<div className='row'>
					<div className='col-1 '>
						<Link className='Header_link' to='/'>
							<div className='Header_circle'>
								<p className='Header_circle_iconM'>M</p>
							</div>
						</Link>
					</div>
					<div className='col-1 offset-xs-1 offset-lg-0 text-xs-center'>
						<p className='Header_p'>Descubre</p>
					</div>
				</div>
			</div>
    </header>
	)
}

export default Header
