import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../shared/global/provider/UserProvider';
import "./AuthenticatedNavBar.css"

export const AuthenticatedNavBar = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("username")
        setAuthenticatedUser(false)
        history.push('/')
    }

    return (
        <div className="profile__wrapper">
            
            <span className="profile__username"> Hello {authenticatedUser} !</span>
            <a className="signin" onClick={() => logout()}>Log Out</a>
               
        </div>
    )
}