import React from 'react';

import Header from './Header';
import ListItemAdmin from './ListItemAdmin';

import Ajouter from '../img/Add2.png';

import '../css/PageManageAdmins.css';

class PageManageAdmins extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: [],
            error: null,
            isHovered: false
        };

        this.fetchData = this.fetchData.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
    };

    fetchData() {
        const url = 'http://localhost:3050/hj2adm/admin';
        const token = localStorage.getItem('token');
        
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                  isLoaded: true,
                  data: result
                });                
                console.log("Load:", this.state.isLoaded, "Data:", this.state.data);
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
                console.log("Load:", this.state.isLoaded, "error:", this.state.error);
            }
        );
    };

    toggleHover() {
        this.setState({
            isHovered: !this.state.isHovered
        })
    };

    componentDidMount() {
        this.fetchData();
    };

    render() {
        return(
            <div id='manageAdmins'>
                <Header/>
                <div id='manageAdminsBody'>
                    <h2>Gestion des Admins</h2>
                    {this.state.isHovered ? 
                        <div id='addAdmin' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                            <a href='/admin/admins/register'><img src={Ajouter} alt='bouton Ajouter'/></a>
                            <p>Enregistrer un·e nouvel·le Admin ?</p>
                        </div>
                    :   
                        <div id='addAdmin' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                            <a href='/admin/admins/register'><img src={Ajouter} alt='bouton Ajouter'/></a>
                        </div>
                    }
                    <ul className='listAdmins'>
                        {this.state.data.map((item) => <ListItemAdmin item={item} key={item._id} dataId={item._id} fetchData={this.fetchData}/>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PageManageAdmins;