import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

function Movie(props) {
	return (
    <section className='row'>
      {
        props.movies.map((movie, key)=>{
          return(
            <article className='CardMovie offset-xs-1 col-10 col-md-8 offset-sm-1 offset-md-0 col-lg-5' key={key}>
              <div className='CardMovie_img'>
								<Link className='CardMovie_a' to={`/movie/${movie.id}`}>
									<img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
								</Link>
              </div>
              <div className='CardMovie_block'>
                <div className='row'>
                  <div className='col-9'>
										<Link className='CardMovie_a' to={`/movie/${movie.id}`}>
											<p className='CardMovie_block_title'>{props.handleResumeTitle(movie.title)}</p>
										</Link>
                  </div>
                  <div className='col-3'>
                    <p className='CardMovie_block_score'>{movie.vote_average} <i className="fas fa-star"></i></p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <p className='CardMovie_block_year'>{movie.release_date.split('-')[0]}</p>
                  </div>
                  <div className='col-10'>
                    <p className='CardMovie_block_category'>Animación, Comedia, Drama, Fa...</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 CardMovie_block_desciption_line'>
                    <p className='CardMovie_block_desciption'>{props.handleResumeDescription(movie.overview)}</p>
                  </div>
                </div>
								<div className='CardMovie_inf'>
	                <div className='row'>
	                  <div className='col-12'>
											<Link className='CardMovie_a' to={`/movie/${movie.id}`}>
												<p className='CardMovie_inf_p'>Más Información</p>
											</Link>
	                  </div>
	                </div>
	              </div>
              </div>
            </article>
          )
        })
      }
    </section>
	)
}

export default Movie
