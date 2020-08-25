import React from 'react';
import { Redirect } from 'react-router-dom';
import {FlyToInterpolator} from 'react-map-gl';

import Header from './Header';
import MapList from './MapList';
import Map from './Map';
import Add from './Add';
import Infos from './Infos';
import HopeD from './HopeD';

import '../css/PageFind.css';

class PageFind extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            data: [],
            isLoaded: false,
            error: null,
            selectedShelter: [],
            isDisplayed: false,
            isHovered: false,
            viewport: {
                height: '100%',
                width: '100%',
                latitude: 48.866667,
                longitude: 2.333333,
                zoom: 8
            }
        }

        this.displayInfosAndCenterViewport = this.displayInfosAndCenterViewport.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
        this.updateViewport = this.updateViewport.bind(this);
        this.handleGeocoderViewportChange = this.handleGeocoderViewportChange.bind(this);
        this.close = this.close.bind(this);
    };

    componentDidMount() {
        const url = 'http://localhost:3050/home/trouver'
        
        fetch(url)
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
        )
    };

    displayInfosAndCenterViewport(e, data, coordinates) {
        console.log(data);
        console.log(coordinates);
        
        let newViewport = {
            ...this.state.viewport,
            longitude: coordinates[0],
            latitude: coordinates[1],
            zoom: 12,
            transitionDuration: 1000,
            transitionInterpolator: new FlyToInterpolator()
        }
        
        this.setState({
            selectedShelter: data,
            isDisplayed: true,
            viewport: newViewport
        })        
    };

    toggleHover() {
        this.setState({
            isHovered: !this.state.isHovered
        })
    };

    updateViewport(viewport) {
        this.setState({
            viewport: viewport
        });
    };

    handleGeocoderViewportChange(viewport) {
        let flyTo = {
            ...viewport,
            transitionDuration: 1000,
            transitionInterpolator: new FlyToInterpolator()
        }
    
        return this.updateViewport({
            ...flyTo
        });
    };

    close() {
        if(this.state.isDisplayed) {
            this.setState({
                isDisplayed: false
            })
        }
    };

    render() {
        return(
            <div id='find'>
                <Header redirectToHome={this.props.redirectToHome}/>
                { this.props.toHome ? <Redirect push to='/'/> : null }
                <div id='findBody'>
                    <MapList 
                        displayInfosAndCenterViewport={this.displayInfosAndCenterViewport} 
                        data={this.state.data}/>
                    <Map
                        displayInfosAndCenterViewport={this.displayInfosAndCenterViewport} 
                        updateViewport={this.updateViewport}
                        handleGeocoderViewportChange={this.handleGeocoderViewportChange}
                        viewport={this.state.viewport}
                        data={this.state.data}
                    />
                    <Add 
                        toggleHover={this.toggleHover} 
                        isHovered={this.state.isHovered}/>
                    <Infos 
                        close={this.close}
                        isDisplayed={this.state.isDisplayed} 
                        shelter={this.state.selectedShelter}/>
                    <HopeD/>
                </div>
            </div>
        );
    };
};

export default PageFind;