import React, { Component } from 'react'

import './style.css'

function footer (props){
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__share'>
          <p className='footer__share-follow'>Siguenos</p>
          <div className='share-icon-container'>
            <i className='fab fa-youtube'></i>
          </div>
          <div className='share-icon-container'>
            <i className='fab fa-youtube'></i>
          </div>
          <div className='share-icon-container'>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='share-icon-container'>
            <i className='fab fa-pinterest-p'></i>
          </div>
          <div className='share-icon-container'>
            <i className='fab fa-twitter'></i>
          </div>
          <div className='share-icon-container'>
            <i className='fab fa-facebook-f'></i>
          </div>
        </div>
      </div>
      <nav className='footer__nav'>
        <div className='container'>
          <ul className='footer__nav-one'>
            <li className='nav-one__item'><a href=''>Ayuda</a></li>
            <li className='nav-one__item nav-one__item-line'> <a href=''>Sobre Nosotros</a></li>
            <li className='nav-one__item nav-one__item-line'> <a href=''>Contacto</a></li>
          </ul>
          <ul className='footer_nav-two'>
            <li className='nav-two__item'> <a href=''>Términos y condiciones </a> </li>
            <li className='nav-two__item nav-two__item-line'> <a href=''>Política de Tratamiento de Datos Personales</a></li>
            <li className='nav-two__item nav-two__item-line'> <a href=''>Politicas  de Privacidad </a></li>
            <li className='nav-two__item nav-two__item-line'> <a href=''>Peticiones, quejas y reclamos</a></li>
            <li className='nav-two__item nav-two__item-line'> <a href=''>SICR</a></li>
            <li className='nav-two__item nav-two__item-line'> <a href=''>Resposabilidad Social</a></li>
            <li className='nav-two__item nav-two__item-line'> <a href=''>Trabaja con nosotros</a></li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default footer
