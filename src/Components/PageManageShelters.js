import React from 'react';

import Header from './Header';
import ListItemShelter from './ListItemShelter';

import '../css/PageManageShelters.css';

class PageManageShelters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: [],
            error: null
        };

        this.fetchData = this.fetchData.bind(this);
    };

    fetchData() {
        const url = 'http://localhost:3050/hj2shel/shelters';
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

    componentDidMount() {
        this.fetchData();
    };

    render() {
        return(
            <div id="manageShelters">
                <Header adminPage={this.props.adminPage}/>
                <div id='manageSheltersBody'>
                    <h2>Gestion des Refuges</h2>
                    <ul className='listShelters'>
                        {this.state.data.map((item) => <ListItemShelter item={item} key={item._id} dataId={item._id} fetchData={this.fetchData}/>)}
                    </ul>
                </div>
            </div>
        );
    };
};

export default PageManageShelters;