/** @format */

import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import axios from '../Back_connection'

class Year extends Component {
	constructor(props) {
		super(props)

		this.onChangeDatedeb = this.onChangeDatedeb.bind(this)
		this.onChangeDatefin = this.onChangeDatefin.bind(this)
		this.onChangeDelai = this.onChangeDelai.bind(this)

		this.state = {
			datedeb: '',
			datefin: '',
			delai: 0,
			value: '',
		}
	}

	componentDidMount() {
		axios
			.get('/admin/annee', {})
			.then((response) => {
				this.setState({
					datedeb: response.data.datedeb,
					datefin: response.data.datefin,
					delai: response.data.delai,
					value: response.data.delai,
				})
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	onChangeDatedeb(e) {
		this.setState({
			datedeb: e.target.value,
		})
	}

	onChangeDatefin(e) {
		this.setState({
			datefin: e.target.value,
		})
	}

	onChangeDelai(e) {
		this.setState({
			delai: e.target.value,
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		const datedeb = this.state.datedeb
		const datefin = this.state.datefin
		const delai = this.state.delai

		axios.post('/admin/annee/', {datedeb, datefin, delai})
		alert('Modified')
	}

	render() {
		return (
			<>
				<div classNameName='container'>
					<form onSubmit={this.handleSubmit}>
						<div classNameName='form-group'>
							<label htmlFor='name'>Début de l'année universitaire</label>
							<input
								type='date'
								name='datedeb'
								onChange={this.onChangeDatedeb}
								value={this.state.datedeb}></input>
						</div>
						<div classNameName='form-group'>
							<label htmlFor='name'>Fin de l'année universitaire</label>
							<input
								type='date'
								name='datefin'
								onChange={this.onChangeDatefin}
								value={this.state.datefin}></input>
						</div>
						<div classNameName='form-group'>
							<label htmlFor='name'>Delai de dépot des PFE</label>
							<input
								type='date'
								name='delai'
								onChange={this.onChangeDelai}
								value={this.state.delai}></input>
						</div>

						<button type='submit' classNameName='btn btn-primary'>
							Enregistrer
						</button>
					</form>
				</div>
			</>
		)
	}
}
export default Year
