import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions'
import '../assets/styles/Login.scss';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'


const Login = props => {
	const [form, setValues] = useState({
		email : ''
	});

	const handleInput = event => {
		setValues({
			...form,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = event => {
		event.preventDefault();
		console.log(form);
		props.loginRequest(form);
		props.history.push('/')
	}

	return (
		<>
		<Header isLogin />
		<section className='login'>
			<section className='login__container'>
				<h2>Inicia sesión</h2>
				<form className='login__container--form' onSubmit={handleSubmit} >
					<input 
						className='input' 
						type='text'
						name='email' 
						placeholder='Correo' 
						onChange={handleInput}
					/>
					<input 
						className='input' 
						name='password'
						type='password' 
						placeholder='Contraseña' 
					/>
					<button className='button'>Iniciar sesión</button>
					<div className='login__container--remember-me'>
						<label>
							<input type='checkbox' id='cbox1' value='first_checkbox' />
							Recuérdame
						</label>
						<a href='/'>Olvidé mi contraseña</a>
					</div>
				</form>
				<section className='login__container--social-media'>
					<div>
						<img src={googleIcon} /> Inicia sesión con Google
					</div>
					<div>
						<img src={twitterIcon} /> Inicia sesión con Twitter
					</div>
				</section>
				<p className='login__container--register'>
					No tienes ninguna cuenta <br/>
					<Link to="/register">
						Regístrate
					</Link>
				</p>
			</section>
		</section>
		</>
)}

const mapDispatchToProps = {
	loginRequest,
}
export default connect(null, mapDispatchToProps)(Login);