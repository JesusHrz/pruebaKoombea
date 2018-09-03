import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../../Home/container/Home'
import Movie from '../../Movie/container/Movie'
import App from '../../App/components/App'

class Router extends Component {
	render(){
		return(
			<BrowserRouter>
				<App>
					<Route exact path='/' component={Home} />
					<Route path='/movie/:id' component={Movie} />
				</App>
			</BrowserRouter>
		)
	}
}

export default Router
