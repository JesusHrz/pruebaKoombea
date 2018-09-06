import React, { Component } from 'react'

import './style.css'

function MovieDescription (props){
  return (
    <section className='movie-description'>
      <div className='container'>
        <h1 className='movie-description__title'>Elenco Principal</h1>
        <article className='movie-description__card-elenco'>
          <img className='card-elenco__img' src='https://image.tmdb.org/t/p/w138_and_h175_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg' />
          <p className='card-elenco__name'>Robert Downey Jr.</p>
          <p className='card-elenco__character'>Tony Stark / Iron Man</p>
        </article>
        <article className='movie-description__card-elenco'>
          <img className='card-elenco__img' src='https://image.tmdb.org/t/p/w138_and_h175_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg' />
          <p className='card-elenco__name'>Robert Downey Jr.</p>
          <p className='card-elenco__character'>Tony Stark / Iron Man</p>
        </article>
        <article className='movie-description__card-elenco'>
          <img className='card-elenco__img' src='https://image.tmdb.org/t/p/w138_and_h175_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg' />
          <p className='card-elenco__name'>Robert Downey Jr.</p>
          <p className='card-elenco__character'>Tony Stark / Iron Man</p>
        </article>
        <article className='movie-description__card-elenco'>
          <img className='card-elenco__img' src='https://image.tmdb.org/t/p/w138_and_h175_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg' />
          <p className='card-elenco__name'>Robert Downey Jr.</p>
          <p className='card-elenco__character'>Tony Stark / Iron Man</p>
        </article>
        <article className='movie-description__card-elenco'>
          <img className='card-elenco__img' src='https://image.tmdb.org/t/p/w138_and_h175_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg' />
          <p className='card-elenco__name'>Robert Downey Jr.</p>
          <p className='card-elenco__character'>Tony Stark / Iron Man</p>
        </article>
        <article className='movie-description__card-elenco'>
          <img className='card-elenco__img' src='https://image.tmdb.org/t/p/w138_and_h175_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg' />
          <p className='card-elenco__name'>Robert Downey Jr.</p>
          <p className='card-elenco__character'>Tony Stark / Iron Man</p>
        </article>
        <h2 className='movie-description__title-default'>Datos</h2>
        <div className='movie-info'>
          <p className='movie-info__title'>Título Original</p>
          <p>Avengers: Infinity War</p>
        </div>
        <div className='movie-info'>
          <p className='movie-info__title text-center'>Status</p>
          <p className='text-center'>Released</p>
        </div>
        <div className='movie-info'>
          <p className='movie-info__title text-center'>Lenguaje Original</p>
          <p className='text-center'>en</p>
        </div>
        <div className='movie-info'>
          <p className='movie-info__title text-center'>Duración</p>
          <p className='text-center'>149 Min</p>
        </div>
        <div className='movie-info'>
          <p className='movie-info__title text-center'>Presupuesto</p>
          <p className='text-center'>$300000000</p>
        </div>
        <div className='movie-info'>
          <p className='movie-info__title text-center'>Ingresos</p>
          <p className='text-center'>$2046239637</p>
        </div>
        <div className='movie-info'>
          <p className='movie-info__title'>Web</p>
          <a href=''>http://marvel.com/movies/...</a>
        </div>
        <h2 className='movie-description__title-default'>Géneros</h2>
        <p className='movie-description__genres'>Adventure</p>
        <p className='movie-description__genres'>Science Fiction</p>
        <p className='movie-description__genres'>Fantasy</p>
        <p className='movie-description__genres'>Action</p>
        <h2 className='movie-description__title-default'>Palabras Claves</h2>
        <p className='movie-description__genres'>Adventure</p>
        <p className='movie-description__genres'>Science Fiction</p>
        <p className='movie-description__genres'>Fantasy</p>
        <p className='movie-description__genres'>Action</p>
        <h2 className='movie-description__title-default'>Tráiler</h2>
        <article className='trailer-container'>
          <iframe className='trailer-container__video' type='text/html'  frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen src='https://www.youtube.com/embed/watch?v=E5R3ED6Zw2U'></iframe>
        </article>
      </div>
    </section>
  )
}

export default MovieDescription


{/* {
  props.cast.map((elen)=>{
    if(elen.order < 6){
      return (
        <article key={elen.order} className='col-xs-5 col-sm-4 col-md-3 col-lg-2'>
          <div className='MovieDescription_card-elenco'>
            <img className='MovieDescription_card-elenco_img' src={`https://image.tmdb.org/t/p/w138_and_h175_face${elen.profile_path}`}></img>
            <div className='MovieDescription_card-elenco_text'>
              <p className='MovieDescription_card-elenco_text_bold'>{elen.name}</p>
              <p className='MovieDescription_card-elenco_text_p'>{elen.character}</p>
            </div>
          </div>
        </article>
      )
    }
  })
} */}

{/* {
  props.genres.map((i, key)=>{
    return (
      <div key={key} className='col-12 col-md-1'>
        <p className='MovieDescription_genres'>{i}</p>
      </div>
    )
  })
} */}
