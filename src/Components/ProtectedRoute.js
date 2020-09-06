import React from 'react';
import { Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

// const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         isLoggedIn === true ? <Component {...props} {...rest}/> : <Redirect to='/admin/login'/>
//     )}/>
// );

class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props);

        this.isTokenExpired = this.isTokenExpired.bind(this);
    };

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            console.log(" decoded ", decoded);
            if (decoded.exp < Date.now() / 1000) {
            // on check la date d'expiration qui est dans le token 
                return true; // token expiré
            } else {
                 return false;
            }
        } catch (err) {
          return false;
        }
    };

    render() {
        const Component = this.props.component;
        const token = localStorage.getItem('token');

        return token && !this.isTokenExpired(token) ? (
            <Component/>
        ) : (
            <Redirect to={{ pathname: '/admin/login'}}/>
        )
    };
};

export default ProtectedRoute;