import React from 'react'

import './style.css'

function Filter(props) {
	return(
		<section className='filter'>
				<h1 className='filter__title'>Descubre Nuevas Películas</h1>
				<div className='filter__group'>
					<label className='filter__group-label'>Año</label>
					<select onChange={props.handleOnChangeYear} id='filter_year' className='filter__group-input' >
						<option value={1}>Todos</option>
						<option>2018</option>
						<option>2017</option>
						<option>2016</option>
						<option>2015</option>
						<option>2014</option>
						<option>2013</option>
						<option>2012</option>
						<option>2011</option>
						<option>2010</option>
						<option>2009</option>
						<option>2008</option>
						<option>2007</option>
						<option>2006</option>
						<option>2005</option>
						<option>2004</option>
						<option>2003</option>
						<option>2002</option>
						<option>2001</option>
						<option>2000</option>
					</select>
				</div>
				<div className='filter__group'>
					<label className='filter__group-label'>Ordenar Por</label>
					<select onChange={props.handleOnChangePopularity} id='filter_Order' className='filter__group-input' >
						<option value='desc'>Popularidad Descendente...</option>
						<option value='asc'>Popularidad Ascendente...</option>
					</select>
				</div>
				<div className='filter__group'>
					<label className='filter__group-label'>Géneros</label>
					<select onChange={props.handleOnchangeGenres} id='filter_genders' className='filter__group-input' >
						<option value={1}>Filtar por género...</option>
						{
							props.genres.map((genre)=>{
								return (
									<option key={genre.id} value={genre.id}>{genre.name}</option>
								)
							})
						}
					</select>
				</div>
				<div className='filter__group'>
					<label className='filter__group-label' >Palabra Clave</label>
					<select id='filter_keyword' className='filter__group-input' >
						<option>Filtrar por palabra clave...</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
				</div>
    </section>
	)
}

export default Filter
