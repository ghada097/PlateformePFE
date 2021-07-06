/** @format */

import React, {Component} from 'react'
import './CSS/Add.css'
import axios from '../Back_connection'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
class Edit_Student extends Component {
	constructor(props) {
		super(props)
		axios
			.get('/etudiant/edit/' + this.props.match.params.id, {})

			.then((response) => {
				this.setState({
					username: response.data.username,
					id: response.data._id,
					email: response.data.email,
					phone: response.data.phone,
				})
			})
		this.state = {
			username: '',
			email: '',
			phone: '',
			id: '',
			value: this.props.pfe,
		}
		this.handleChangeUsername = this.handleChangeUsername.bind(this)
		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangePhone = this.handleChangePhone.bind(this)
		this.handleChangePassword = this.handleChangePassword.bind(this)
	}
	handleChangeUsername(event) {
		this.setState({username: event.target.value})
	}
	handleChangeEmail(event) {
		this.setState({email: event.target.value})
	}
	handleChangePhone(event) {
		this.setState({phone: event.target.value})
	}
	handleChangePassword(event) {
		this.setState({id: event.target.value})
	}
	componentDidMount() {}

	handleSubmit = async (e) => {
		e.preventDefault()
		const username = this.state.username
		const phone = this.state.phone
		const email = this.state.email
		const password = this.state.password

		axios.post('/etudiant/edit/' + this.props.match.params.id, {
			username,
			email,
			phone,
			password,
		})
		alert('Modified!')
	}

	render() {
		return (
			<>
				<div className='login-popup-wrap new_login_popup'>
					<div className='login-popup-heading text-center'>
						<h4>
							<i className='fa fa-lock' aria-hidden='true'></i> Modification{' '}
						</h4>
					</div>
					<form onSubmit={this.handleSubmit}>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								id='user_id'
								onChange={this.handleChangeUsername}
								value={this.state.username}
								placeholder='Name'
								name='name'
							/>
						</div>
						<div className='form-group'>
							<input
								type='email  '
								className='form-control'
								id='user_id'
								onChange={this.handleChangeEmail}
								value={this.state.email}
								placeholder='email'
								name='email'
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								id='user_id'
								onChange={this.handleChangePhone}
								value={this.state.phone}
								placeholder='phone'
								name='phone'
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
export default Edit_Student
