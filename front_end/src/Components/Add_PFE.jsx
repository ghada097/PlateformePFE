/** @format */

import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import axios from '../Back_connection'
import './CSS/Add_PFE.css'
import Edit_PFE from './Edit_PFE'

class Add_PFE extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {}

	render() {
		let disabled = false
		if (this.props.days < 0) {
			disabled = true
		}
		const {redirect} = this.state

		if (redirect) {
			return <Redirect to='/login' />
		}
		return (
			<>
				<link
					rel='stylesheet'
					href='http://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/css/bootstrapValidator.min.css'
				/>
				<script
					type='text/javascript'
					src='http://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/js/bootstrapValidator.min.js'></script>

				<div className='container'>
					<div className='row'>
						<form action='/template/pfe' method='POST' className='contact-form'>
							<div className='row'>
								<div className='col-md-6'>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											name='Name'
											autocomplete='off'
											id='Name'
											placeholder={this.props.username}
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
											placeholder={this.props.email}
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
											id='pfe'
											placeholder='Deposer votre cahier de charge  '></textarea>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<button
										type='submit'
										className='btn main-btn pull-right'
										disabled={disabled}>
										Deposer
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
export default Add_PFE
