import React from 'react';
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
                latitude: 48.866667,
                longitude: 2.333333,
                zoom: 8
            }
        }

        this.displayInfosAndCenterViewport = this.displayInfosAndCenterViewport.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
        this.resize = this.resize.bind(this);
        this.handleViewportChange = this.handleViewportChange.bind(this);
        this.handleGeocoderViewportChange = this.handleGeocoderViewportChange.bind(this);
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
        
        const viewport = {
            ...this.state.viewport,
            longitude: coordinates[0],
            latitude: coordinates[1],
            zoom: 10,
            transitionDuration: 1000,
            transitionInterpolator: new FlyToInterpolator()
        }
        
        this.setState({
            selectedShelter: data,
            isDisplayed: true,
            viewport: viewport
        })
        console.log(this.state.viewport);
        
    };

    toggleHover() {
        this.setState({
            isHovered: !this.state.isHovered
        })
    };

    resize() {
        this.handleViewportChange({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    handleViewportChange(viewport) {
        console.log(viewport);
        
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
    };

    handleGeocoderViewportChange(viewport) {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };
        console.log(viewport);
    
        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        });
    };

    render() {
        return(
            <div id='find'>

                <Header/>
                <div id='findBody'>
                    <MapList displayInfosAndCenterViewport={this.displayInfosAndCenterViewport} data={this.state.data}/>
                    <Map
                        displayInfosAndCenterViewport={this.displayInfosAndCenterViewport} 
                        handleViewportChange={this.handleViewportChange}
                        handleGeocoderViewportChange={this.handleGeocoderViewportChange}
                        resize={this.resize}
                        viewport={this.state.viewport}
                        data={this.state.data}
                    />
                    <Add toggleHover={this.toggleHover} isHovered={this.state.isHovered}/>
                    <Infos isDisplayed={this.state.isDisplayed} shelter={this.state.selectedShelter}/>
                    <HopeD/>
                </div>

            </div>
        );
    };
};

export default PageFind;