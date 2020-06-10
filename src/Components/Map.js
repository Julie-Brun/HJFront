import React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';

import Hope from '../img/Hopebutton.png'
import '../css/Map.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoianVsaWVicnVuIiwiYSI6ImNrYjNkOXNpcDA0bjkycm82MTZuYTBmanYifQ.qQ-lmdpkd_g46oVVUOVydw';

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.mapRef= React.createRef();
        this.geocoderContainerRef = React.createRef();

    }

    componentDidMount() {
        window.addEventListener("resize", this.props.resize);
        this.props.resize();
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.props.resize);
    }

    render() {
        return(
            <div id='map'>
                <div id='mapContainer' ref={this.geocoderContainerRef}>
                <ReactMapGL
                    ref={this.mapRef}
                    {...this.props.viewport}
                    width='600px'
                    height='600px'
                    mapStyle='mapbox://styles/mapbox/streets-v11'
                    onViewportChange={this.props.handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                >
                    <Geocoder
                        mapRef={this.mapRef}
                        containerRef={this.geocoderContainerRef}
                        onViewportChange={this.props.handleGeocoderViewportChange}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                    />
                    {this.props.data.map(place => (
                        <Marker
                        key={place._id}
                        latitude={place.location.coordinates[1]}
                        longitude={place.location.coordinates[0]}
                        >
                            <img 
                                className='marker' 
                                src={Hope} 
                                alt='Tête de Hope' 
                                onClick={((e) => this.props.displayInfosAndCenterViewport(e, place, place.location.coordinates))} 
                            />
                        </Marker>
                    ))}
                </ReactMapGL>
                </div>
            </div>
        )
    }

}

export default Map;