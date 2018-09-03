import React, { Component } from 'react'

import './style.css'

function Poster (props){
  return (
    <section className='Poster'>
      <section className='container'>
        <div className='row'>
          <article className='offset-xs-1 col-10'>
            <div className='row'>
              <div className='col-11 col-md-6 col-lg-4'>
                <img className='Poster_img' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.movie.poster_path}`}></img>
              </div>
              <div className='col-8 col-md-6'>
                <h1>{props.movie.original_title}</h1>
                <div className='row'>
                  <div className='col-4 col-sm-3 col-md-3 col-lg-2'>
                    <div className='Poster_circle-score'>
                      <p className='Poster_circle-score_p'>{`${props.movie.vote_average}%`}</p>
                    </div>
                  </div>
                  <div className='col-4 col-sm-3 col-md-3 col-lg-2'>
                    <p className='Poster_p'>User &nbsp; Score</p>
                  </div>
                </div>
                <h5>General</h5>
                <p>{props.movie.overview}</p>
                <h5>Equipo Destacado</h5>
                {
                  props.crew.map((i)=>{
                    if(i.job == 'Director'){
                      return(
                        <div key={i.id}>
                            <p className='Poster_p_name'>{i.name}</p>
                            <p>{i.job}</p>
                        </div>
                      )
                    }
                  })
                }
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
  )
}

export default Poster
