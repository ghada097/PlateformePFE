/** @format */

import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import { Component } from 'react'
import App from './App'
import Login from './Components/Login'
import Add_Student from './Components/Add_Student'

describe('formulaires', () => {
	test('champs du formulaire de login', () => {
		const test = jest.fn()
		const {debug, getByLabelText, getByTestId, getByText} = render(<Login />)

		const password = getByLabelText(/Password/i)
		expect(password).toBeTruthy()
		expect(password).toHaveAttribute('type', 'password')

		const email = getByLabelText(/Email Adresse/i)
		expect(email).toBeTruthy()
		expect(email).toHaveAttribute('type', 'email')
	})
	test('champs du formulaire de l ajout d un etudiant', () => {
		const test = jest.fn()
		const {debug, getByLabelText, getByTestId, getByText} = render(<Add_Student />)

		const name = getByLabelText(/name/i)
		expect(name).toBeTruthy()
		expect(name).toHaveAttribute('type', 'text')

		const email = getByLabelText(/Email/i)
		expect(email).toBeTruthy()
		expect(email).toHaveAttribute('type', 'email')

		const phone = getByLabelText(/phone/i)
		expect(phone).toBeTruthy()
		expect(phone).toHaveAttribute('type', 'text')

		const password = getByLabelText(/password/i)
		expect(password).toBeTruthy()
		expect(password).toHaveAttribute('type', 'password')
	})
})


