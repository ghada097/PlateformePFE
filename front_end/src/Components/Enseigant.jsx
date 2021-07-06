/** @format */

import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import axios from '../Back_connection'
import './CSS/Enseignant.css'
import Password from './Password'

class Enseignant extends Component {
	constructor(props) {
		super(props)
		this.logout = this.logout.bind(this)

		this.state = {}
	}

	componentDidMount() {
		axios
			.get('/admin/team', {})
			.then((response) => {})
			.catch((response) => {
				alert('Not Authorized')
				this.setState({redirect: true})
			})
		axios
			.get('/template/user', {})
			.then((response) => {
				this.setState({
					email: response.data.email,
					name: response.data.name,
				})
			})
			.catch((response) => {})
	}
	logout() {
		axios
			.post('/user/login/logout', {})
			.then((res) => {
				console.log(res.data)
				this.setState({redirect: true})
			})
			.catch((err) => {
				console.log(err)
			})
	}
	render() {
		const {redirect} = this.state

		if (redirect) {
			return <Redirect to='/login' />
		}
		return (
			<>
				<Router>
					{' '}
					<link
						href='//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
						rel='stylesheet'
						id='bootstrap-css'
					/>
					<script src='//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js'></script>
					<script src='//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
					<link
						href='//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
						rel='stylesheet'
						id='bootstrap-css'
					/>
					<script src='//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'></script>
					<script src='//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
					<div id='wrapper' className='animate'>
						<nav className='navbar header-top fixed-top navbar-expand-lg navbar-dark bg-dark'>
							<a className='navbar-brand' href='#'>
								Plateforme PFE
							</a>
							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#navbarText'
								aria-controls='navbarText'
								aria-expanded='false'
								aria-label='Toggle navigation'>
								<span className='navbar-toggler-icon'></span>
							</button>
							<div className='collapse navbar-collapse' id='navbarText'>
								<ul className='navbar-nav ml-md-auto d-md-flex'>
									<li className='nav-item'>
										<Link className='nav-link' to='/password'>
											<i className=' fa fa-unlock-alt'></i> Mot de passe
										</Link>
									</li>
									<li className='nav-item'>
										<a className='nav-link' href='#'>
											<i className='fa fa-envelope'></i> {this.state.email}
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link' href onClick={this.logout}>
											<i className='fa fa-sign-out'></i> se déconnecter
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<div className='container-fluid'>
							<div className='row'>
								<div className='col'>
									<h1>Welcome {this.state.name}</h1>
									<Route exact path='/password' component={Password} />
								</div>
							</div>
						</div>
					</div>
					<script
						defer
						src='https://use.fontawesome.com/releases/v5.0.6/js/all.js'></script>
				</Router>
			</>
		)
	}
}
export default Enseignant
