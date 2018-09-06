import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

function Header(props) {
	return(
		<header className='header'>
			<div className='container'>
				<div className='header__logo'>
					<Link className='header__logo-link' to='/'>
						M
					</Link>
				</div>
				<h1 className='header__title'>Descubre</h1>
			</div>
		</header>
	)
}

export default Header


// card
// 	card__header
// 		card__title
// 	card__body
// 		card__body
// 	card__footer
// 		card__title
