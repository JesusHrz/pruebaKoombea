import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

function SearchInput(props) {
	return(
    <section className='Search'>
      <div className='container'>
        <div className='row'>
          <div className='Search_icon col-1 text-right text-xs-center flex-xs-middle'>
            <i className="fas fa-search"></i>
          </div>
          <div className='col-8'>
            <form action='' onSubmit={props.handleSubmit}>
              <input
								onChange = {props.handleOnChange}
								className='Search_input' name='search' type='search' placeholder='Buscar'
								ref={props.setRef}
								onClick={props.handleClick}
								autoComplete='off' />
            </form>
          </div>
					<div className='Search_list col-8 offset-xs-1'>
						<ul>
							{
								props.listMovies.map((movie, key)=>{
									console.log(movie)
									return (
										<Link key={key} to={`/movie/${movie.id}`}><li> {movie.title}</li></Link>
									)
								})
							}
						</ul>
					</div>
        </div>
      </div>
    </section>
	)
}

export default SearchInput
