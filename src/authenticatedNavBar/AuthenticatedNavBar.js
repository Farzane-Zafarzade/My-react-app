import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom';
import RoutingPath from '../routes/RoutingPath';
import { UserContext } from '../shared/global/provider/UserProvider';
import "./AuthenticatedNavBar.css"

export const AuthenticatedNavBar = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("username")
        setAuthenticatedUser(false)
        history.push(RoutingPath.homeView,{param:'Welcome to home page'})
    }

    return (
        <div className="wrapper">
            
            <span className="username"> Hello {authenticatedUser} !</span>
            <a className="signin" onClick={() => logout()}>Log Out</a>
               
        </div>
    )
}