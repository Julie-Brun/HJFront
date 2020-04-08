import React from 'react';
import '../css/Title.css';

class Title extends React.Component {
    render() {
        return(
            <div id='title'>
                <h1 id='first'>{this.props.title}</h1>
                <h2 id='second'>{this.props.subtitle}</h2>
            </div>
        );
    };
};

export default Title;