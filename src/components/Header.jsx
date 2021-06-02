import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user } = props
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({})
    props.history.push('/login')
  }

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
          {
            hasUser ? 
              <li><a href="#">{user.email}</a></li>
            : null
          }
          {
            hasUser ? 
              <li>
                <a href="#" onClick={handleLogout}>Cerrar Sesión</a>
              </li>
              : 
              <Link to="/login">
                <li>Iniciar Sesión</li>
              </Link> 
          }
          
          
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
const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
