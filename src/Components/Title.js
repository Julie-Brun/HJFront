import React from 'react';
import '../css/Title.css';

class Title extends React.Component {
    render() {
        return(
            <div id='title'>
                <p id='first'>{this.props.title}</p>
                <p id='second'>{this.props.subtitle}</p>
            </div>
        );
    };
};

export default Title;