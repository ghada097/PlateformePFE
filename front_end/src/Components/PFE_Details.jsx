/** @format */

import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import axios from '../Back_connection'
import './CSS/PFE_Details.css'

class PFE_Details extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	componentDidMount() {
		axios
			.get('/admin/infoEtudiant/' + this.props.match.params.id, {})

			.then((response) => {
				console.log(response.data)
				this.setState({
					pfe: response.data.pfe,
					encadrant: response.data.accepted_by_name,
					etudiant: response.data.added_by_name,
				})
			})
	}
	render() {
		return (
			<>
				<div className='card'>
					<div className='box'>
						<div className='img'>
							<img src='https://www.planwallpaper.com/static/images/cool-wallpaper-5_G6Qe1wU.jpg' />
						</div>
						<h2>
							{this.state.etudiant} <br />
							<span>Cahier des Charges</span>
						</h2>
						<p>{this.state.pfe} </p>
						<h2>Encadré Par: {this.state.encadrant}</h2>

						<span>
							<ul>
								<li>
									<a href='#'>
										<i className='fa fa-facebook' aria-hidden='true'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fa fa-twitter' aria-hidden='true'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fa fa-google-plus' aria-hidden='true'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fa fa-linkedin' aria-hidden='true'></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fa fa-instagram' aria-hidden='true'></i>
									</a>
								</li>
							</ul>
						</span>
					</div>
				</div>
			</>
		)
	}
}
export default PFE_Details
