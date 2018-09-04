import React, { Component, Fragment } from 'react'

import Footer from '../../Footer/components/Footer'

function MovieLayout (props){
  return (
    <Fragment>
      {props.children}
      <Footer />
    </Fragment>
  )
}

export default MovieLayout
