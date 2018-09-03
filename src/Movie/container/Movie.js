import React, { Component } from 'react'

import MovieLayout from '../components/MovieLayout'
import Header from '../../Header/components/Header'
import Poster from '../components/Poster'
import MovieDescription from '../components/MovieDescription'
import Footer from '../components/Footer'

class Movie extends Component{
	constructor(props){
		super(props)
		this.state = {
			movie: {},
			cast: [],
			crew: [],
			genres: [],
			video: [],
			movie_id: props.location.pathname.split('/')[2]
		}

		this.handleRequestDiscover = this.handleRequestDiscover.bind(this)
	}

	componentDidMount(){
		this.handleRequestDiscover()
	}

	handleRequestDiscover(){
		fetch(`https://api.themoviedb.org/3/movie/${this.state.movie_id}?api_key=b89ba07af49cab5cbe07d4d7bb9d1dfa&append_to_response=credits,videos`).then((res)=>{
			 return res.json()
		}).then((movie)=>{
			let genres = movie.genres.map((g)=>{
				return g.name
			})
			let video = movie.videos.results[0]
			this.setState({ movie, cast: movie.credits.cast, crew: movie.credits.crew, genres, video})
		})
	}

	render() {
		return (
			<MovieLayout>
				<Header />
        <Poster movie={this.state.movie} crew={this.state.crew} />
				<MovieDescription movie={this.state.movie} cast={this.state.cast}  genres={this.state.genres} video={this.state.video}/>
				<Footer />
			</MovieLayout>
		)
	}
}

export default Movie
