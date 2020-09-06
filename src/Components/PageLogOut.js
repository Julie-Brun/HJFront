import React from 'react';
import { Redirect } from 'react-router-dom';

import Header from './Header';

import '../css/PageLogOut.css';

class PageLogOut extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            redirectToLogIn: false,
            redirectToHome: false
        };

        this.LogOut = this.LogOut.bind(this);
        this.RedirectToHome = this.RedirectToHome.bind(this);
    };

    LogOut() {
        const url = 'http://localhost:3050/hj2auth/logout';
        const token = localStorage.getItem('token');
        
        fetch (url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log("result:", result);
                localStorage.removeItem('token');
                this.setState({
                    redirectToLogIn: true
                });
            },
            (error) => {
                console.log("error:", error);
            }
        );
    };

    RedirectToHome() {
        this.setState({
            redirectToHome: true
        });
    };

    render() {
        const {redirectToLogIn, redirectToHome} = this.state;

        if(redirectToLogIn) {
            return <Redirect to='/admin/login'/>
        };

        if(redirectToHome) {
            return <Redirect to='/admin/home'/>
        };

        return(
            <div id='logOut'>
                <Header/>
                <div id='logOutBody'>
                    <p>Déconnexion ?</p>
                    <button onClick={this.LogOut}>Déconnexion</button>
                    <button onClick={this.RedirectToHome}>Retour à l'Accueil</button>
                </div>
            </div>
        );
    };
};

export default PageLogOut;