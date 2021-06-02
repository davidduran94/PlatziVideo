import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user } = props

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="" />
          <p>{user.email}</p>
        </div>
        <ul>
          <li><a href="/">Cuenta</a></li>
          <Link to="/login">
            <li>Cerrar Sesión</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Header);
