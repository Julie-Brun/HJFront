import React from 'react';

import '../css/ShelName.css';

class ShelName extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: '',
            top: '20%'
        };
    };

    componentDidMount() {
        const resizeObserver = new ResizeObserver ((entries) => {
            for (let entry of entries) {
                if (entry.contentRect.height < 60) {
                    console.log(entry.contentRect.height);
                    this.setState({
                        top: '26%'
                    })
                } else {
                    this.setState({
                        top: '20%'
                    })
                }
            }
            console.log(entries);
        })
        resizeObserver.observe(this.container);
    };

    render() {
        return(
            <div id='shelName' style={{top: this.state.top}}>
                <h2 ref={el => (this.container = el)}>{this.props.name}</h2>
            </div>
        )
    }
}

export default ShelName;