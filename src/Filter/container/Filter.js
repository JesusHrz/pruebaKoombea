import React, { Component } from 'react'

import FilterLayout from '../components/FilterLayout'

class Filter extends Component{
	constructor(props){
		super(props)
		this.state = {genres: []}
		this.handleRequestListGenres = this.handleRequestListGenres.bind(this)
	}

	componentDidMount() {
		this.handleRequestListGenres()
	}

	handleRequestListGenres(){
		fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b89ba07af49cab5cbe07d4d7bb9d1dfa').then((res)=>{
			 return res.json()
		}).then((genres)=>{
			this.setState({genres: genres.genres})
		})
	}

	render() {
		return (
    	<FilterLayout
				genres={this.state.genres}
				handleOnChangeYear={this.props.handleOnChangeYear}
				handleOnChangePopularity={this.props.handleOnChangePopularity}
				handleOnchangeGenres={this.props.handleOnchangeGenres}
			/>
		)
	}
}

export default Filter
