/** @format */

import React, {Component} from 'react'
import './CSS/All_PFE.css'
import axios from '../Back_connection'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
class All_PFE extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pfe: [],
		}
	}

	componentDidMount() {
		axios
			.get('/enseignant/pfe', {})
			.then((response) => {
				this.setState({
					pfe: response.data,
				})
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	render() {
		return (
			<>
				{this.state.pfe.map((item) => (
					<div></div>
				))}

				<div className='container-xl'>
					<div className='table-responsive'>
						<div className='table-wrapper'>
							<div className='table-title'>
								<div className='row'>
									<div className='col-sm-6'>
										<h2>
											Liste <b>PFE</b>
										</h2>
									</div>
								</div>
							</div>
							<table className='table table-striped table-hover'>
								<thead>
									<tr>
										<th>Etudiant</th>
										<th>Encadrant</th>
										<th>Cahier des charges</th>
									</tr>
								</thead>
								<tbody>
									{this.state.pfe.map((item) => (
										<tr>
											<td>{item.added_by_name}</td>
											<td>{item.accepted_by_name}</td>
											<td>{item.pfe}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default All_PFE
