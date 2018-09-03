import React from 'react'

import './style.css'

function Filter(props) {
	return(
		<section className='Filter'>
			<div className='row'>
				<div className='col-md-2 col-lg-2'>
					<div className='form-group'>
						<label className='Filter_label'>Año</label>
						<select onChange={props.handleOnChangeYear} id='Filter_year' className='form-control' >
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
				</div>
				<div className='col-md-5 col-lg-3'>
					<div className='form-group'>
						<label className='Filter_label'>Ordenar Por</label>
						<select onChange={props.handleOnChangePopularity} id='Filter_Order' className='form-control' >
							<option value='desc'>Popularidad Descendente...</option>
							<option value='asc'>Popularidad Ascendente...</option>
						</select>
					</div>
				</div>
				<div className='col-md-5 col-lg-3'>
					<div className='form-group'>
						<label className='Filter_label'>Géneros</label>
						<select onChange={props.handleOnchangeGenres} id='Filter_genders' className='form-control' >
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
				</div>
				<div className='col-md-5 col-lg-3'>
					<div className='form-group'>
						<label className='Filter_label' >Palabra Clave</label>
						<select id='Filter_keyword' className='form-control' >
							<option>Filtrar por palabra clave...</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div>
				</div>
			</div>
    </section>
	)
}

export default Filter
