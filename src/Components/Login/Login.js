import React, { useState , useContext, useEffect} from 'react'
import { Redirect } from 'react-router';
import AuthContext from '../../context/auth/AuthContext'


export const Login = props => {
    const authContext = useContext(AuthContext);
    const {login , error , isAuthenticated , user , loadUser , logout} = authContext;
    const [state , setState] = useState({
        email:"",
        password:""
    })
    const {email , password} = state;

    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        login({
            email,
            password
        })

      
    }
    useEffect(()=> {
       isAuthenticated &&  props.history.push('/')
    }, [isAuthenticated])
    const handleCange = (e) => {
        setState({...state, [e.target.name]:e.target.value});
    }
    return (
        <div className="login container-50 container">
            <form onSubmit={handleOnSubmit}>
            <div className="input-field-login">
                <p className="input-label">username</p>
                <input type="email" name="email" value={email} onChange={handleCange}/>
            </div>
            <div className="input-field-login">
                <p className="input-label">username</p>
                <input type="password" name="password" value={password} onChange={handleCange}/>
            </div>
            <div className="content-button">
                <button className="btn-blue" type="submit">Login</button>
            </div>
            </form>
            {
               error && <div className="error-message">{error}</div>
            }
        </div>
    )
}
