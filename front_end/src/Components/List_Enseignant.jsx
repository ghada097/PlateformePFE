/** @format */

import React, {Component} from 'react'
import './CSS/List.css'
import axios from '../Back_connection'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
class List_Enseignant extends Component {
	constructor(props) {
		super(props)
		this.delete = this.delete.bind(this)

		this.state = {
			etudiants: [],
			id: '',
		}
	}

	componentDidMount() {
		axios
			.get('/enseignant/membre', {})
			.then((response) => {
				this.setState({
					etudiants: response.data,
				})
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	delete(x) {
		axios.post('/admin/delete/' + x, {}).catch((err) => {
			console.log(err)
		})
		this.setState({redirect: true})
	}

	render() {
		const {redirect} = this.state

		if (redirect) {
			return <Redirect to='/admin' />

			/* 	  Return <Redirect to="/list_student" />;*/
		}
		return (
			<>
				<div className='container-xl'>
					<div className='table-responsive'>
						<div className='table-wrapper'>
							<div className='table-title'>
								<div className='row'>
									<div className='col-sm-6'>
										<h2>
											Gestion <b>Enseignant</b>
										</h2>
									</div>
								</div>
							</div>
							<table className='table table-striped table-hover'>
								<thead>
									<tr>
										<th>Nom et prénom</th>
										<th>Email</th>
										<th>Téléphone</th>
										<th>PFE</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{this.state.etudiants.map((item) => (
										<tr>
											<td>{item.username}</td>
											<td>{item.email}</td>
											<td>{item.phone}</td>

											<td>
												<Link to={'/etudiant/info/' + item._id}>PFE Info</Link>
											</td>
											<td>
												<Link
													to={'/edit_student/' + item._id}
													classNameName='edit'>
													<i
														className='material-icons'
														data-toggle='tooltip'
														title='Edit'>
														&#xE254;
													</i>{' '}
												</Link>
												<a
													href
													onClick={() => this.delete(item._id)}
													classNameName='delete'>
													<i
														className='material-icons'
														data-toggle='tooltip'
														title='Delete'>
														&#xE872;
													</i>
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div id='addEmployeeModal' className='modal fade'>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<form>
								<div className='modal-header'>
									<h4 className='modal-title'>Add Employee</h4>
									<button
										type='button'
										className='close'
										data-dismiss='modal'
										aria-hidden='true'>
										&times;
									</button>
								</div>
								<div className='modal-body'>
									<div className='form-group'>
										<label>Name</label>
										<input type='text' className='form-control' required />
									</div>
									<div className='form-group'>
										<label>Email</label>
										<input type='email' className='form-control' required />
									</div>
									<div className='form-group'>
										<label>Address</label>
										<textarea className='form-control' required></textarea>
									</div>
									<div className='form-group'>
										<label>Phone</label>
										<input type='text' className='form-control' required />
									</div>
								</div>
								<div className='modal-footer'>
									<input
										type='button'
										className='btn btn-default'
										data-dismiss='modal'
										value='Cancel'
									/>
									<input
										type='submit'
										className='btn btn-success'
										value='Add'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div id='editEmployeeModal' className='modal fade'>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<form>
								<div className='modal-header'>
									<h4 className='modal-title'>Edit Employee</h4>
									<button
										type='button'
										className='close'
										data-dismiss='modal'
										aria-hidden='true'>
										&times;
									</button>
								</div>
								<div className='modal-body'>
									<div className='form-group'>
										<label>Name</label>
										<input type='text' className='form-control' required />
									</div>
									<div className='form-group'>
										<label>Email</label>
										<input type='email' className='form-control' required />
									</div>
									<div className='form-group'>
										<label>Address</label>
										<textarea className='form-control' required></textarea>
									</div>
									<div className='form-group'>
										<label>Phone</label>
										<input type='text' className='form-control' required />
									</div>
								</div>
								<div className='modal-footer'>
									<input
										type='button'
										className='btn btn-default'
										data-dismiss='modal'
										value='Cancel'
									/>
									<input type='submit' className='btn btn-info' value='Save' />
								</div>
							</form>
						</div>
					</div>
				</div>
				<div id='deleteEmployeeModal' className='modal fade'>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<form>
								<div className='modal-header'>
									<h4 className='modal-title'>Delete Employee</h4>
									<button
										type='button'
										className='close'
										data-dismiss='modal'
										aria-hidden='true'>
										&times;
									</button>
								</div>
								<div className='modal-body'>
									<p>Are you sure you want to delete these Records?</p>
									<p className='text-warning'>
										<small>This action cannot be undone.</small>
									</p>
								</div>
								<div className='modal-footer'>
									<input
										type='button'
										className='btn btn-default'
										data-dismiss='modal'
										value='Cancel'
									/>
									<input
										type='submit'
										className='btn btn-danger'
										value='Delete'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default List_Enseignant
