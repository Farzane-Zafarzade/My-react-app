import React, {useContext} from 'react'
import './DesktopNavigation.css'
import Logo from '../shared/img/Logo.svg'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../shared/global/provider/UserProvider'
import {AuthenticatedNavBar} from '../authenticatedNavBar/AuthenticatedNavBar'


export const DesktopNavigation = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
       return (authenticatedUser) 
       ? <div className="authenticatedUserNavBar"> <AuthenticatedNavBar/></div>
       :<div onClick = {() => history.push('/')} className="signin">Sign in</div>
        
       
    }

    return (
        <div className="navbar__wrapper">
            <div><img onClick = {() => history.push('/')} className="logo" src={Logo} alt="PayMe Logo"/><br/>
            <span onClick={()=> history.push('/')} style={{fontFamily:"fantasy", color:"white",fontSize:"1.5rem",padding:"0.5rem",cursor:"pointer"}}>PAY ME</span>
            </div>
            {displayUserIfAuthenticated()}
        </div>
    )
}