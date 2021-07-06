/** @format */

import React, {Component} from 'react'
import './CSS/Add.css'
import axios from '../Back_connection'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
class Add_Enseignant extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	componentDidMount() {}

	render() {
		return (
			<>
				<div className='login-popup-wrap new_login_popup'>
					<div className='login-popup-heading text-center'>
						<h4>
							<i className='fa fa-lock' aria-hidden='true'></i> Ajout{' '}
						</h4>
					</div>
					<form action='/enseignant' method='post'>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								id='user_id'
								placeholder='Name'
								name='name'
							/>
						</div>
						<div className='form-group'>
							<input
								type='email  '
								className='form-control'
								id='user_id'
								placeholder='email'
								name='email'
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								id='user_id'
								placeholder='phone'
								name='phone'
							/>
						</div>
						<div className='form-group'>
							<input
								type='password'
								className='form-control'
								id='password'
								placeholder='Password'
								name='password'
							/>
						</div>
						<div className='form-group'>
							<input
								type='password'
								className='form-control'
								id='password'
								placeholder='Confirm Password'
								name='password2'
							/>
						</div>
						<button
							type='submit'
							className='btn btn-default login-popup-btn'
							name='submit'
							value='1'>
							Ajouter
						</button>
					</form>
				</div>
			</>
		)
	}
}
export default Add_Enseignant
