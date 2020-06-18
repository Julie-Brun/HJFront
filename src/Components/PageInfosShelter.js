import React from 'react';

import Header from './Header';
import HopeG from './HopeG';
import ShelName from './ShelName';
import ShelInfos from './ShelInfos';
import ShelPicture from './ShelPicture';

import '../css/PageInfosShelter.css';

class PageInfosShelter extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            data: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3050/home/trouver/infos' + this.props.location.search;

        fetch(url)
        .then (res => res.json())
        .then (
            (result) => {
                this.setState({
                    data: result,
                    isLoaded: true
                });
                console.log('Load:', this.state.isLoaded, 'Data:', this.state.data); 
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.log('Load:', this.state.isLoaded, 'Error:', this.state.error);
            }
        )
    };

    render() {
        console.log(this.props.location.search);
        
        return(
            <div id='info'>
                <Header/>
                <div id='infosBody'>
                    <HopeG/>
                    <ShelName
                        name={this.state.data.name}
                    />
                    <ShelInfos
                        data={this.state.data}
                    />
                    <ShelPicture
                        picture={this.state.data.logo}
                    />
                </div>

            </div>
        );
    };
};

export default PageInfosShelter;