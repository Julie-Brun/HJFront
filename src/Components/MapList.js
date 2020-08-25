import React from 'react';

import '../css/MapList.css';

class MapList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filtered: []
        }

        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        this.setState({
            filtered: this.props.data
        })
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.data
        })
    };

    handleChange(e) {
        let currentList = [];
        let newList = [];

        if (e.target.value !== '') {
            currentList = this.props.data;
            newList = currentList.filter(item => {
                const lc = item.name.toString().toLowerCase();
                const filter = e.target.value.toString().toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.props.data;
        }

        this.setState({
            filtered: newList
        })
    };

    render() {
        return(
            <div id='maplist'>
                <h2>Refuges</h2>
                <ul id='listItems'>
                    <input type='search' placeholder='Recherche ...' onChange={this.handleChange}/>
                    {this.state.filtered.map((shelter) => 
                        <li 
                            className='listItem' 
                            key={shelter._id} 
                            onClick={((e) => this.props.displayInfosAndCenterViewport(e, shelter, shelter.location.coordinates))}
                        >
                            {shelter.name}
                        </li> 
                    )}
                </ul>
            </div>
        );
    };
};

export default MapList;