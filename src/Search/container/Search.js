import React, { Component } from 'react'
import SearchInput from '../components/SearchInput'

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      listMovies: [],
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setRef = this.setRef.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount(){
    document.addEventListener('click',(ev)=>{
        this.setState({listMovies: [] })
    })
  }

  handleSubmit(ev){
    ev.preventDefault()
    console.log(this.input.value)
  }

  handleOnChange(ev){
    ev.preventDefault()
    this.setState({query: ev.target.value})

    if(this.state.query !== ''){
      let movies = fetch(`https://api.themoviedb.org/3/search/movie?api_key=b89ba07af49cab5cbe07d4d7bb9d1dfa&query=${this.state.query}`).then((res)=>{
         return res.json()
      }).then((movies)=>{
        console.log(movies)
        this.setState({
          listMovies: movies.results
        })
      })
    }else{
      this.setState({
        listMovies: []
      })
    }
  }

  handleClick(ev){

  }

  setRef(el){
    this.input = el
  }

  render(){
    return(
      <SearchInput
        handleOnChange = {this.handleOnChange}
        handleSubmit={this.handleSubmit}
        setRef={this.setRef}
        listMovies = {this.state.listMovies}
      />
    )
  }
}

export default Search
