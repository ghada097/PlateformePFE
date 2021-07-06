/** @format */

import React, {Component} from 'react'
import './CSS/Admin.css'
import axios from '../Back_connection'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Add_Student from './Add_Student'
import List_Student from './List_Student'
import Edit_Student from './Edit_Student'
import Add_Enseignant from './Add_Enseignant'
import List_Enseignant from './List_Enseignant'
import Year from './Year'
import All_PFE from './All_PFE'
import PFE_Details from './PFE_Details'
class Admin extends Component {
	constructor(props) {
		super(props)
		this.logout = this.logout.bind(this)
		this.state = {
			redirect: false,
			email: '',
		}
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
					<header className='header'>
						<nav className='navbar navbar-toggleable-md navbar-light pt-0 pb-0 '>
							<button
								className='navbar-toggler navbar-toggler-right'
								type='button'
								data-toggle='collapse'
								data-target='#navbarNavDropdown'
								aria-controls='navbarNavDropdown'
								aria-expanded='false'
								aria-label='Toggle navigation'>
								<span className='navbar-toggler-icon'></span>
							</button>
							<a className='navbar-brand p-0 mr-5' href='#'>
								<img src='http://via.placeholder.com/61x14' />
							</a>
							<div className='float-left'>
								{' '}
								<a href='#' className='button-left'>
									<span className='fa fa-fw fa-bars '></span>
								</a>{' '}
							</div>
							<div
								className='collapse navbar-collapse flex-row-reverse'
								id='navbarNavDropdown'>
								<ul className='navbar-nav'>
									<li className='nav-item dropdown messages-menu'>
										<a
											className='nav-link dropdown-toggle'
											href='http://example.com'
											id='navbarDropdownMenuLink'
											data-toggle='dropdown'
											aria-haspopup='true'
											aria-expanded='false'>
											<i className='fa fa-bell-o'></i>
											<span className='label label-success bg-success'>10</span>
										</a>
										<div
											className='dropdown-menu'
											aria-labelledby='navbarDropdownMenuLink'>
											<ul className='dropdown-menu-over list-unstyled'>
												<li className='header-ul text-center'>
													You have 4 messages
												</li>
												<li>
													<ul className='menu list-unstyled'>
														<li>
															<a href='#'>
																<div className='pull-left'>
																	<img
																		src='http://via.placeholder.com/160x160'
																		className='rounded-circle  '
																		alt='User Image'
																	/>
																</div>
																<h4>
																	Support Team
																	<small>
																		<i className='fa fa-clock-o'></i> 5 mins
																	</small>
																</h4>
																<p>Why not buy a new awesome theme?</p>
															</a>
														</li>
														<li>
															<a href='#'>
																<div className='pull-left'>
																	<img
																		src='http://via.placeholder.com/160x160'
																		className='rounded-circle '
																		alt='User Image'
																	/>
																</div>
																<h4>
																	AdminLTE Design Team
																	<small>
																		<i className='fa fa-clock-o'></i> 2 hours
																	</small>
																</h4>
																<p>Why not buy a new awesome theme?</p>
															</a>
														</li>
														<li>
															<a href='#'>
																<div className='pull-left'>
																	<img
																		src='http://via.placeholder.com/160x160'
																		className='rounded-circle '
																		alt='User Image'
																	/>
																</div>
																<h4>
																	Developers
																	<small>
																		<i className='fa fa-clock-o'></i> Today
																	</small>
																</h4>
																<p>Why not buy a new awesome theme?</p>
															</a>
														</li>
														<li>
															<a href='#'>
																<div className='pull-left'>
																	<img
																		src='http://via.placeholder.com/160x160'
																		className='rounded-circle '
																		alt='User Image'
																	/>
																</div>
																<h4>
																	Sales Department
																	<small>
																		<i className='fa fa-clock-o'></i> Yesterday
																	</small>
																</h4>
																<p>Why not buy a new awesome theme?</p>
															</a>
														</li>
														<li>
															<a href='#'>
																<div className='pull-left'>
																	<img
																		src='http://via.placeholder.com/160x160'
																		className='rounded-circle '
																		alt='User Image'
																	/>
																</div>
																<h4>
																	Reviewers
																	<small>
																		<i className='fa fa-clock-o'></i> 2 days
																	</small>
																</h4>
																<p>Why not buy a new awesome theme?</p>
															</a>
														</li>
													</ul>
												</li>
												<li className='footer-ul text-center'>
													<a href='#'>See All Messages</a>
												</li>
											</ul>
										</div>
									</li>
									<li className='nav-item dropdown notifications-menu'>
										<a
											className='nav-link dropdown-toggle'
											href='http://example.com'
											id='navbarDropdownMenuLink'
											data-toggle='dropdown'
											aria-haspopup='true'
											aria-expanded='false'>
											<i className='fa fa-envelope-o'></i>
											<span className='label label-warning bg-warning'>10</span>
										</a>
										<div
											className='dropdown-menu'
											aria-labelledby='navbarDropdownMenuLink'>
											<ul className='dropdown-menu-over list-unstyled'>
												<li className='header-ul text-center'>
													You have 10 notifications
												</li>
												<li>
													<ul className='menu list-unstyled'>
														<li>
															<a href='#'>
																<i className='fa fa-users text-aqua'></i> 5 new
																members joined today
															</a>
														</li>
														<li>
															<a href='#'>
																<i className='fa fa-warning text-yellow'></i>{' '}
																Very long description here that may not fit into
																the page and may cause design problems
															</a>
														</li>
														<li>
															<a href='#'>
																<i className='fa fa-users text-red'></i> 5 new
																members joined
															</a>
														</li>
														<li>
															<a href='#'>
																<i className='fa fa-shopping-cart text-green'></i>{' '}
																25 sales made
															</a>
														</li>
														<li>
															<a href='#'>
																<i className='fa fa-user text-red'></i> You
																changed your username
															</a>
														</li>
													</ul>
												</li>
												<li className='footer-ul text-center'>
													<a href='#'>View all</a>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<a
											className='nav-link dropdown-toggle'
											href='http://example.com'
											id='navbarDropdownMenuLink'
											data-toggle='dropdown'
											aria-haspopup='true'
											aria-expanded='false'>
											<span className='hidden-xs'>{this.state.email}</span>
										</a>
									</li>
									<li className='nav-item dropdown  user-menu'>
										<a
											className='nav-link dropdown-toggle'
											href
											onClick={this.logout}
											id='navbarDropdownMenuLink'
											data-toggle='dropdown'
											aria-haspopup='true'
											aria-expanded='false'>
											<span className='hidden-xs'>se déconnecter</span>
										</a>
										<div
											className='dropdown-menu'
											aria-labelledby='navbarDropdownMenuLink'>
											<a className='dropdown-item' href='#'>
												Action
											</a>
											<a className='dropdown-item' href='#'>
												Another action
											</a>
											<a className='dropdown-item' href='#'>
												Something else here
											</a>
										</div>
									</li>
								</ul>
							</div>
						</nav>
					</header>

					<div className='main'>
						<aside>
							<div className='sidebar left '>
								<div className='user-panel'>
									<div className='pull-left image'>
										<img
											src='http://via.placeholder.com/160x160'
											className='rounded-circle'
											alt='User Image'
										/>
									</div>
									<div className='pull-left info'>
										<p>Admin</p>
										<a href='#'>
											<i className='fa fa-circle text-success'></i> En ligne
										</a>
									</div>
								</div>
								<ul className='list-sidebar bg-defoult'>
									<li>
										{' '}
										<Link to='/annee/'>
											<i className='fa fa-th-large'></i>{' '}
											<span className='nav-label'>
												Calendrier de l'année universitaire
											</span>
										</Link>{' '}
									</li>

									<li>
										{' '}
										<a
											href='#'
											data-toggle='collapse'
											data-target='#dashboard'
											className='collapsed active'>
											{' '}
											<i className='fa fa-th-large'></i>{' '}
											<span className='nav-label'> Gestion Etudiants</span>{' '}
											<span className='fa fa-chevron-left pull-right'></span>{' '}
										</a>
										<ul className='sub-menu collapse' id='dashboard'>
											<li className='active'>
												<Link to='/addstudent/'>Ajouter</Link>
											</li>
											<li>
												<Link to='/list_student/'>Liste des étudiants</Link>
											</li>
										</ul>
									</li>
									<li>
										{' '}
										<a
											href='#'
											data-toggle='collapse'
											data-target='#dashboard'
											className='collapsed active'>
											{' '}
											<i className='fa fa-th-large'></i>{' '}
											<span className='nav-label'> Gestion Enseignants</span>{' '}
											<span className='fa fa-chevron-left pull-right'></span>{' '}
										</a>
										<ul className='sub-menu collapse' id='dashboard'>
											<li className='active'>
												<Link to='/add_enseignant/'>Ajouter</Link>
											</li>
											<li>
												<Link to='/list_enseignant/'>
													Liste des enseignants
												</Link>
											</li>
										</ul>
									</li>
									<li>
										{' '}
										<a
											href='#'
											data-toggle='collapse'
											data-target='#dashboard'
											className='collapsed active'>
											{' '}
											<i className='fa fa-th-large'></i>{' '}
											<span className='nav-label'> Gestion PFE</span>{' '}
											<span className='fa fa-chevron-left pull-right'></span>{' '}
										</a>
										<ul className='sub-menu collapse' id='dashboard'>
											<li className='active'>
												<Link to='/all_pfe/'>Liste des PFE</Link>
											</li>
											<li>
												<a href='#'>PFE sans encadrants</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							<Route exact path='/addstudent/' component={Add_Student} />
							<Route exact path='/list_student/' component={List_Student} />
							<Route exact path='/edit_student/:id' component={Edit_Student} />
							<Route exact path='/add_enseignant/' component={Add_Enseignant} />
							<Route
								exact
								path='/list_enseignant/'
								component={List_Enseignant}
							/>
							<Route exact path='/annee/' component={Year} />
							<Route exact path='/all_pfe/' component={All_PFE} />
							<Route exact path='/etudiant/info/:id' component={PFE_Details} />
						</aside>
					</div>
				</Router>
			</>
		)
	}
}
export default Admin
