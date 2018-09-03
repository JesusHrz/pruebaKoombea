import React, { Component } from 'react'

import './style.css'

function Footer (props){
  return (
    <section className='Footer'>
      <section className='Footer_share'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 offset-md-2 col-sm-12 col-md-2'>
              <p className='Footer_share_p text-xs-center'>Siguenos</p>
            </div>
            <div className='col-4 offset-xs-2 offset-sm-1 col-sm-2 offset-md-0 col-md-1'>
              <div className='Footer_share_icon'>
                <i className='Footer_share_icon_i' className="fab fa-youtube"></i>
              </div>
            </div>
            <div className='col-4 col-sm-2 col-md-1'>
              <div className='Footer_share_icon'>
                <i className='Footer_share_icon_i' className="fab fa-instagram"></i>
              </div>
            </div>
            <div className='col-4 col-sm-2 col-md-1'>
              <div className='Footer_share_icon'>
                <i className='Footer_share_icon_i' className="fab fa-pinterest-p"></i>
              </div>
            </div>
            <div className='col-4 col-sm-2 col-md-1'>
              <div className='Footer_share_icon'>
                <i className='Footer_share_icon_i' className="fab fa-twitter"></i>
              </div>
            </div>
            <div className='col-4 col-sm-2 col-md-1'>
              <div className='Footer_share_icon'>
                <i className='Footer_share_icon_i' className="fab fa-facebook-f"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav className='Footer_nav'>
        <div className='container-fluid'>
          <div className='row row-reset-margin'>
            <div className=' col-12 col-md-8 offset-md-2 text-xs-center'>
              <ul className='Footer_nav_nav1'>
                <li className='Footer_nav_nav1_li'> <a href=''>Ayuda</a> </li>
                <li className='Footer_nav_nav1_li Footer_nav_nav1_li_line '> <a href=''>Sobre Nosotros</a></li>
                <li className='Footer_nav_nav1_li Footer_nav_nav1_li_line'> <a href=''>Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className='row row-reset-margin'>
            <div className='col-12 text-xs-center'>
              <ul className='Footer_nav_nav2'>
                <li className='Footer_nav_nav2_li'> <a href=''>Términos y condiciones </a> </li>
                <li className='Footer_nav_nav2_li Footer_nav_nav1_li_line '> <a href=''>Política de Tratamiento de Datos Personales</a></li>
                <li className='Footer_nav_nav2_li Footer_nav_nav1_li_line'> <a href=''>Politicas  de Privacidad </a></li>
                <li className='Footer_nav_nav2_li Footer_nav_nav1_li_line'> <a href=''>Peticiones, quejas y reclamos</a></li>
                <li className='Footer_nav_nav2_li Footer_nav_nav1_li_line'> <a href=''>SICR</a></li>
                <li className='Footer_nav_nav2_li Footer_nav_nav1_li_line'> <a href=''>Resposabilidad Social</a></li>
                <li className='Footer_nav_nav2_li Footer_nav_nav1_li_line'> <a href=''>Trabaja con nosotros</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Footer
