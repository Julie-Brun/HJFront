import React from 'react';

import '../css/Loading.css';

const Loading = () => {
    return (
        <div id='container'>
            <div className="gooey">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Loading;