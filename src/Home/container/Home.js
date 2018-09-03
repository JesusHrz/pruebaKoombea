import React, { Component } from 'react'

import HomeLayout from '../components/HomeLayout'
import Header from '../../Header/components/Header'
import Search from '../../Search/container/Search'
import Movies from '../../Movies/container/Movies'

function Home(props){
	return (
		<HomeLayout>
			<Header />
			<Search />
			<Movies />
		</HomeLayout>
	)
}

export default Home
