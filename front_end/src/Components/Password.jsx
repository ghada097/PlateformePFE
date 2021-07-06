/** @format */

import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import axios from '../Back_connection'
import './CSS/Add_PFE.css'
import Edit_PFE from './Edit_PFE'
import Add_PFE from './Add_PFE'

class Password extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
		axios
			.get('/template/user', {})
			.then((response) => {
				this.setState({
					email: response.data.email,
				})
			})
			.catch((response) => {})
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
									<form action='/user/password' method='post'>
										<h3 className='text-center '>Changer mot de passe</h3>
										<div style={{display: 'none'}} className='form-group'>
											<label for='username' className='text-info'>
												Username:
											</label>
											<br />
											<input
												type='email'
												name='email'
												value={this.state.email}
												id='email'
												className='form-control'
											/>
										</div>
										<div className='form-group'>
											<label for='password' className='text-info'>
												mot de passe:
											</label>
											<br />
											<input
												type='text'
												onChange={this.onChangePassword}
												name='password'
												id='password'
												className='form-control'
											/>
										</div>
										<div className='form-group'>
											<label for='password' className='text-info'>
												Confirmation mot de passe:
											</label>
											<br />
											<input
												type='text'
												onChange={this.onChangePassword}
												name='password2'
												id='password'
												className='form-control'
											/>
										</div>
										<div className='form-group'>
											<label for='remember-me' className='text-info'>
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
export default Password
