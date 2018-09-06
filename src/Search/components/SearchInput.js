import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

function searchInput(props) {
	return(
    <div className='search'>
      <div className='container'>
				<div className='search__icon'>
					<i className='fas fa-search'></i>
				</div>
				<form className='search__form' action='' onSubmit={props.handleSubmit}>
					<input
						onChange = {props.handleOnChange}
						className='search__form-input' name='search' type='search' placeholder='Buscar'
						ref={props.setRef}
						onClick={props.handleClick}
						autoComplete='off' />
				</form>
    	</div>
			<ul className='search__list'>
				{
					props.listMovies.map((movie, key)=>{
						return (
						<Link className='search__list-item' key={key} to={`/movie/${movie.id}`}>	<li> {movie.title} </li></Link>
						)
					})
				}
			</ul>
    </div>
	)
}

export default searchInput
