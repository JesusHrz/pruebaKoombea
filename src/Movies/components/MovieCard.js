import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

function MovieCard (props){
  return (
    <article className='movie-card'>
      <div className='movie-card__left'>
        <Link to={`/movie/${props.movie.id}`} className='movie-card__link'>
          <img className='movie-card__img' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`} alt={props.movie.title} />
        </Link>
      </div>
      <div className='movie-card__info'>
        <Link to={`/movie/${props.movie.id}`} className='movie-card__title text-bold'>
          {props.handleResumeTitle(props.movie.title)}
        </Link>
        <p className='movie__card-score text-bold'>{props.movie.vote_average}<i className="fas fa-star"></i></p>
        <p className='movie__card-year'>{props.movie.release_date.split('-')[0]}</p>
        <p className='movie__card-genres'>Animación, Comedia, Drama, Fa...</p>
        <p className='movie__card-description'>{props.handleResumeDescription(props.movie.overview)}</p>
        <div className='movie-card__about'>
          <Link to='/' className='movie-card__link'>
            Más Información
          </Link>
        </div>
      </div>
    </article>
  )
}

export default MovieCard


{/* <div className='CardMovie_block'>
  <Link className='CardMovie_a'>
    <p className='CardMovie_block_title'>{props.handleResumeTitle(props.movie.title)}</p>
  </Link>
  <p className='CardMovie_block_score'>{movie.vote_average} <i className="fas fa-star"></i></p>
  <p className='CardMovie_block_year'>{movie.release_date.split('-')[0]}</p>
  <p className='CardMovie_block_category'>Animación, Comedia, Drama, Fa...</p>
  <div className='CardMovie_block_desciption_line'>
    <p className='CardMovie_block_desciption'>{props.handleResumeDescription(movie.overview)}</p>
  </div>
  <div className='CardMovie_inf'>
    <Link className='CardMovie_a'>
      <p className='CardMovie_inf_p'>Más Información</p>
    </Link>
  </div>
</div> */}
