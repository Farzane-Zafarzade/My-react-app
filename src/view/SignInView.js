import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import LogoSignin from '../shared/img/LogoSignin.svg'
import RoutingPath from '../routes/RoutingPath'


export const SignInView = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const login = () => {
        setAuthenticatedUser(username)
        localStorage.setItem("username", username)
        history.push(RoutingPath.loansView)
    }

    return (
        <form className="container">
            <div className="form-control">
                <div> <img className="logo-singin" src={LogoSignin} alt="Illustration of a chef" /> </div>
                <div className="signin-text"> This is a demo App!<br /> Enter any username and password and log in.</div>
                <label> Username: </label>
                <input onChange={event => setUsername(event.target.value)} />
            </div>
            <div className="form-control">
                <label>Password: </label>
                <input onChange={event => setPassword(event.target.value)} type="password" />
            </div>
            <button className="btn btn-block" onClick={() => login()}>Log in</button>

        </form>
    )
}