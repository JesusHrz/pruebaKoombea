import React, { Component } from 'react'

import MoviesLayout from '../components/MoviesLayout'
import Filter from '../../Filter/container/Filter'
import Movie from '../components/Movie'

class Movies extends Component{
	constructor(props){
		super(props)
		this.state = {
			movies : [],
			year: 0,
			popularity: '',
			genres: ''
		}

		this.handleRequestDiscover = this.handleRequestDiscover.bind(this)

		this.handleRequestYears = this.handleRequestYears.bind(this)
		this.handleOnChangeYear = this.handleOnChangeYear.bind(this)

		this.handleRequestPopularity = this.handleRequestPopularity.bind(this)
		this.handleOnChangePopularity = this.handleOnChangePopularity.bind(this)

		this.handleOnchangeGenres = this.handleOnchangeGenres.bind(this)
	}

	componentDidMount() {
		this.handleRequestDiscover()
	}

	handleRequestDiscover(){
		fetch('https://api.themoviedb.org/3/discover/movie?api_key=b89ba07af49cab5cbe07d4d7bb9d1dfa').then((res)=>{
			 return res.json()
		}).then((movies)=>{
			this.setState({ movies: movies.results })
		})
	}

	handleOnChangeYear(ev){
		let year = ev.target.value
		this.setState({year})
		this.handleRequestYears(year)
	}

	handleOnChangePopularity(ev){
		let p = ev.target.value
		this.handleRequestPopularity(p)
	}

	handleOnchangeGenres(ev){
		let genre = ev.target.value
		this.handleRequestGenres(genre)
	}

	handleRequestYears(year){
		if(year != 1){
			fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b89ba07af49cab5cbe07d4d7bb9d1dfa&year=${year}`).then((res)=>{
				 return res.json()
			}).then((movies)=>{
				this.setState({ movies: movies.results, year })
			})
		}
		return this.handleRequestDiscover()
	}

	handleRequestPopularity(p){
		if(p == 'desc'){
			return (
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b89ba07af49cab5cbe07d4d7bb9d1dfa&sort_by=popularity.desc&year=${this.state.year}`).then((res)=>{
					 return res.json()
				}).then((movies)=>{
					this.setState({ movies: movies.results })
				})
			)
		}
		fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b89ba07af49cab5cbe07d4d7bb9d1dfa&sort_by=popularity.asc&year=${this.state.year}`).then((res)=>{
			 return res.json()
		}).then((movies)=>{
			this.setState({ movies: movies.results })
		})
	}

	handleRequestGenres(genres){
		if(genres != 1 ){
			fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b89ba07af49cab5cbe07d4d7bb9d1dfa&with_genres=${genres}`).then((res)=>{
				 return res.json()
			}).then((movies)=>{
				this.setState({ movies: movies.results })
			})

		}
		return this.handleRequestDiscover()
	}

	handleResumeDescription(description){
		if(description.length > 167){
			return description.substring(0, 167) + '...'
		}
		return description
	}

	handleResumeTitle(title){
		if(title.length > 35){
			return title.substring(0, 25) + '...'
		}
		return title
	}

	render() {
		return (
			<MoviesLayout>
        <h3>Descubre Nuevas Películas</h3>
        <Filter
					handleOnChangeYear={this.handleOnChangeYear}
					handleOnChangePopularity = {this.handleOnChangePopularity}
					handleOnchangeGenres = {this.handleOnchangeGenres}
				/>
        <Movie movies={this.state.movies} handleResumeTitle={this.handleResumeTitle} handleResumeDescription={this.handleResumeDescription} />
      </MoviesLayout>
		)
	}
}

export default Movies
