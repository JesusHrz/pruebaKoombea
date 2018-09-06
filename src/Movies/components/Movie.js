import React, { Component } from 'react'


import MovieCard from './MovieCard'

import './style.css'

function Movie(props) {
	return (
    <section className='movies-cards'>
			{
				props.movies.map((movie, key) =>{
					return (<MovieCard movie={movie} key={key} handleResumeTitle={props.handleResumeTitle} handleResumeDescription={props.handleResumeDescription} />)
				})
			}
    </section>
	)
}

export default Movie
