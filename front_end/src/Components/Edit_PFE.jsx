/** @format */

import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import axios from '../Back_connection'
import './CSS/Add_PFE.css'

class Edit_PFE extends Component {
	constructor(state) {
		super(state)
		this.handleChange = this.handleChange.bind(this)
		this.handleChangePfe = this.handleChangePfe.bind(this)

		this.handleCompanySubmit = this.handleCompanySubmit.bind(this)

		this.state = {
			pfe: '',
		}
	}
	handleChange(event) {
		this.setState({value: event.target.value})
	}
	handleChangePfe(event) {
		this.setState({pfe: event.target.value})
	}
	componentDidMount() {
		axios
			.get('/template/pfe', {})
			.then((response) => {
				this.setState({
					pfe: response.data.docs.pfe,
					id: response.data.docs._id,
					days: response.data.days,
					email: response.data.user.email,
					phone: response.data.user.phone,
					username: response.data.user.name,
				})
			})
			.catch((response) => {
				alert('Not AUTHORIZED')
				this.setState({redirect: true})
			})
	}

	handleCompanySubmit = (event) => {
		event.preventDefault()
		const pfe = this.state.pfe
		this.setState({value: event.target.value})

		axios
			.post('/template/pfe/' + this.state.id, {pfe})
			.then((result) => {
				console.log(result)

				return result
			})

			.catch(function (error) {
				console.log(error)
			})
		alert('modified')
	}

	render() {
		const {redirect} = this.state

		if (redirect) {
			return <Redirect to='/login' />
		}
		let disabled = false
		if (this.state.days < 0) {
			disabled = true
		}
		const {pfe} = this.state
		const x = pfe
		return (
			<>
				<div className='container'>
					<div className='row'>
						<form onSubmit={this.handleCompanySubmit} className='contact-form'>
							<div className='row'>
								<div className='col-md-6'>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											name='Name'
											autocomplete='off'
											id='Name'
											placeholder={this.state.username}
										/>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group'>
										<input
											type='email'
											className='form-control'
											name='email'
											autocomplete='off'
											id='email'
											placeholder={this.state.email}
										/>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<div className='form-group'>
										<textarea
											className='form-control textarea'
											rows='3'
											name='pfe'
											id='Message'
											placeholder='Message'
											value={x}
											onChange={this.handleChangePfe}></textarea>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<button
										disabled={disabled}
										type='submit'
										className='btn main-btn pull-right'>
										Modifier
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</>
		)
	}
}
export default Edit_PFE
