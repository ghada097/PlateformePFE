/** @format */

import React, {Component} from 'react'
import './CSS/Login.css'
import axios from '../Back_connection'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
class Login extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onChangePassword = this.onChangePassword.bind(this)

		this.state = {
			email: '',
			password: '',
		}
	}

	componentDidMount() {}

	onChangeEmail(e) {
		this.setState({
			email: e.target.value,
		})
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value,
		})
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		const email = this.state.email
		const password = this.state.password

		axios.post('/user/login/auth', {
			email,
			password,
		})
	}
	render() {
		return (
			<>
				<div id='login'>
					<h3 className='text-center text-white pt-5'></h3>
					<div className='container'>
						<div
							id='login-row'
							className='row justify-content-center align-items-center'>
							<div id='login-column' className='col-md-6'>
								<div id='login-box' className='col-md-12'>
									<form action='/user/login/auth' method='post'>
										<h3 className='text-center text-info'>Connexion</h3>
										<div className='form-group'>
											<label htmlFor='username' className='text-info'>
												Email:
											</label>
											<br />
											<input
												aria-label='Email Adresse'
												type='email'
												onChange={this.onChangeEmail}
												name='email'
												id='email'
												className='form-control'
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='password' className='text-info'>
												Mot de passe:
											</label>
											<br />
											<input
												aria-label='Password'
												type='password'
												onChange={this.onChangePassword}
												name='password'
												id='password'
												className='form-control'
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='remember-me' className='text-info'>
												<span>Remember me</span> 
												<span>
													<input
														id='remember-me'
														name='remember-me'
														type='checkbox'
													/>
												</span>
											</label>
											<br />
											<input
												aria-label='Login'
												type='submit'
												name='submit'
												className='btn btn-info btn-md'
												value='submit'
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default Login
