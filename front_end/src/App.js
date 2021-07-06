/** @format */

import logo from './logo.svg'
import './App.css'
import Admin from './Components/Admin.jsx'
import Login from './Components/Login.jsx'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Add_Student from './Components/Add_Student'
import Add_PFE from './Components/Add_PFE'
import Student from './Components/Student'
import Enseignant from './Components/Enseigant'
import List_Student from './Components/List_Student'
function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/login' component={Login} />
				<Route exact path='/admin' component={Admin} />
				<Route exact path='/etudiant' component={Student} />
				<Route exact path='/enseignant' component={Enseignant} />
				<Route exact path='/' component={Login} />

				{/*<Route exact path="/list_student" component={List_Student} />*/}
			</Router>
		</div>
	)
}

export default App
