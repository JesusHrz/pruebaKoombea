import React, { Component, Fragment } from 'react'

import Footer from '../../Footer/components/Footer'

function MovieLayout (props){
  return (
    <Fragment>
      <section>
          {props.children}
      </section>
      <Footer />
    </Fragment>
  )
}

export default MovieLayout
