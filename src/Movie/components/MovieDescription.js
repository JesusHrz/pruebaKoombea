import React, { Component } from 'react'

import './style.css'

function MovieDescription (props){
  return (
    <section className='MovieDescription'>
      <section className='container'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='MovieDescription_h3'>Elenco Principal</h3>
          </div>
        </div>
        <div className='row'>
        {
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
        }
        </div>
        <div className='row'>
          <div className='col-12'>
            <h3 className='MovieDescription_h3'>Datos</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-3 col-lg-2'>
            <p className='MovieDescription_card_text_bold'>Título Original</p>
            <p>{`${props.movie.original_title}`}</p>
          </div>
          <div className='col-12 col-md-2 col-lg-1'>
            <p className='MovieDescription_card_text_bold'>Status</p>
            <p>{`${props.movie.status}`}</p>
          </div>
          <div className='col-12 col-md-3 col-lg-2'>
            <p className='MovieDescription_card_text_bold'>Lenguaje Original</p>
            <p>{`${props.movie.original_language}`}</p>
          </div>
          <div className='col-12 col-md-2 col-lg-1'>
            <p className='MovieDescription_card_text_bold'>Duración</p>
            <p>{`${props.movie.runtime} Min`}</p>
          </div>
          <div className='col-12 col-md-3 col-lg-2'>
            <p className='MovieDescription_card_text_bold'>Presupuesto</p>
            <p>{`$${props.movie.budget}`}</p>
          </div>
          <div className='col-12 col-md-3 col-lg-2'>
            <p className='MovieDescription_card_text_bold'>Ingresos</p>
            <p>{`$${props.movie.revenue}`}</p>
          </div>
          <div className='col-12 col-md-3 col-lg-2'>
            <p className='MovieDescription_card_text_bold'>Web</p>
            <a href={props.movie.homepage}>{`${props.movie.homepage}`}</a>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <h5 className='MovieDescription_h5'>Géneros</h5>
          </div>
        </div>
        <div className='row'>
          {
            props.genres.map((i, key)=>{
              return (
                <div key={key} className='col-12 col-md-1'>
                  <p className='MovieDescription_genres'>{i}</p>
                </div>
              )
            })
          }
        </div>
        <div className='row'>
          <div className='col-3'>
            <h5 className='MovieDescription_h5'>Palabras Claves</h5>
          </div>
        </div>
        <div className='row'>
          {
            props.genres.map((i, key)=>{
              return (
                <div key={key} className='col-12 col-md-1'>
                  <p className='MovieDescription_genres'>{i}</p>
                </div>
              )
            })
          }
        </div>
        <div className='row'>
          <div className='col-3'>
            <h5 className='MovieDescription_h5'>Tráiler</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-8 offset-xs-1 col1'>
            <article className='MovieDescription_trailer'>
              <iframe className='MovieDescription_trailer_video' type='text/html'  frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen src={`https://www.youtube.com/embed/${props.video.key}`}></iframe>
            </article>
          </div>
        </div>
      </section>
    </section>
  )
}

export default MovieDescription
