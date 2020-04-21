import React from 'react';

import '../css/ArticleList.css';

class ArticleList extends React.Component {
    render() {
        return(
            <div id='articleList'>
                <h3>Apprendre ...</h3>
                <ul id='list'>
                    <li>Truc</li>
                    <li>Bidule</li>
                    <li>Machin</li>
                    <li>Chose</li>
                    <li>Chouette</li>
                </ul>
            </div>
        );
    };
};

export default ArticleList;