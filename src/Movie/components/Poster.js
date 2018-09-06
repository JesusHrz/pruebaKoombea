import React, { Component } from 'react'

import './style.css'

function poster (props){
  return (
    <section className='poster'>
      <article className='container'>
        <div className='poster__left'>
          <img className='poster__img' src='https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'></img>
        </div>
        <div className='poster__info'>
          <h1 className='poster__info-title'>Avengers: Infinity War</h1>
          <div className='poster__info-score'>
            <p className='poster__info-score-points'>8.3%</p>
          </div>
          <p className='poster__info-user'>User <br/> Score</p>
          <h2 className='poster__info-general' >General</h2>
          <p className='poster_info-overview'>As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.</p>
          <h3 className='poster__info-team'>Equipo Destacado</h3>
          <p className='poster__info-name'>Joe Russo</p>
          <p className='poster__info-job'>Director</p>
          <p className='poster__info-name'>Joe Russo</p>
          <p className='poster__info-job'>Director</p>
          {/* {
            props.crew.map((i)=>{
              if(i.job == 'Director'){
                return(
                  <div key={i.id}>
                      <p className='poster_p_name'>{i.name}</p>
                      <p>{i.job}</p>
                  </div>)
                }
              })
          } */}
        </div>
      </article>
    </section>
  )
}

export default poster

//
// <section className='poster'>
//   <div className='container'>
//     <div className='row'>
//       <article className='offset-xs-1 col-10'>
//         <div className='row'>
//           <div className='col-11 col-md-6 col-lg-4'>
//             <img className='poster_img' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.movie.poster_path}`}></img>
//           </div>
//           <div className='col-8 col-md-6'>
//             <h1>{props.movie.original_title}</h1>
//             <div className='row'>
//               <div className='col-4 col-sm-3 col-md-3 col-lg-2'>
//                 <div className='poster_circle-score'>
//                   <p className='poster_circle-score_p'>{`${props.movie.vote_average}%`}</p>
//                 </div>
//               </div>
//               <div className='col-4 col-sm-3 col-md-3 col-lg-2'>
//                 <p className='poster_p'>User &nbsp; Score</p>
//               </div>
//             </div>
//             <h5>General</h5>
//             <p>{props.movie.overview}</p>
//             <h5>Equipo Destacado</h5>
//             {
//               props.crew.map((i)=>{
//                 if(i.job == 'Director'){
//                   return(
//                     <div key={i.id}>
//                         <p className='poster_p_name'>{i.name}</p>
//                         <p>{i.job}</p>
//                     </div>
//                   )
//                 }
//               })
//             }
//           </div>
//         </div>
//       </article>
//     </div>
//   </div>
// </section>
