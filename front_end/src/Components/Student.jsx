/** @format */

import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import axios from '../Back_connection'
import './CSS/Add_PFE.css'
import Edit_PFE from './Edit_PFE'
import Add_PFE from './Add_PFE'
import Password from './Password'

class Student extends Component {
	constructor(props) {
		super(props)
		this.logout = this.logout.bind(this)
		this.password = this.password.bind(this)

		this.state = {
			change: false,
			verify: '',
			pfe: '',
		}
	}
	password() {
		this.setState({
			change: true,
		})
	}
	componentDidMount() {
		axios
			.get('/template/etudiant', {})
			.then((response) => {
				this.setState({
					email: response.data.email,
					username: response.data.name,
				})
			})
			.catch((response) => {
				alert('Not AUTHORIZED!')
				this.setState({redirect: true})
			})

		axios
			.get('/template/pfe', {})
			.then((response) => {
				this.setState({
					pfe: response.data.docs.pfe,
					verify: response.data.docs,

					id: response.data.docs._id,
					days: response.data.days,
					email: response.data.user.email,
					phone: response.data.user.phone,
					accepted: response.data.docs.accepted_by_name,
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
					<header className='top-line'>
						<div className='phone'>
							{' '}
							<Link
								style={{color: 'white'}}
								onClick={this.password}
								to='/password'>
								<i className=' fa fa-unlock-alt'></i> Mot de passe
							</Link>
							<a href onClick={this.logout}>
								{' '}
								<i className='fa fa-sign-out'></i>se déconnecter
							</a>
						</div>
						<div className='mobile-menu-btn'>
							<i className='fa fa-bars'></i> Меню
						</div>
						<nav className='main-menu top-menu'>
							<ul>
								<li className='active'>
									<a href='#'>Home</a>
								</li>
								<li>
									<a href='#'>Services</a>
								</li>
								<li>
									<a href='#'>Contact</a>
								</li>
							</ul>
						</nav>
					</header>

					{this.state.verify ? (
						<Edit_PFE
							days={this.state.days}
							pfe={this.state.pfe}
							id={this.state.id}
							accepted={this.state.accepted}
							email={this.state.email}
							student={this.state.username}></Edit_PFE>
					) : (
						<Add_PFE
							days={this.state.days}
							email={this.state.email}
							username={this.state.username}></Add_PFE>
					)}
					<Route exact path='/password' component={Password} />
				</Router>
			</>
		)
	}
}
export default Student
