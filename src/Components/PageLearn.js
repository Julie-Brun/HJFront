import React from 'react';

import Header from './Header';
import ArticleList from './ArticleList';
import HopeG from './HopeG';
import ArticleBody from './ArticleBody';

import '../css/PageLearn.css';

class PageLearn extends React.Component {
    render() {
        return(
            <div id='learn'>

                <Header/>
                <div id='learnBody'>
                    {/* <div id='columnL'> */}
                        <ArticleList/>
                        <HopeG/>
                    {/* </div> */}
                    <ArticleBody/>
                </div>

            </div>
        );
    };
};

export default PageLearn;