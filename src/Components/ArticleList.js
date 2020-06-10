import React from 'react';

import '../css/ArticleList.css';

class ArticleList extends React.Component {
    render() {       
        return(
            <div id='articleList'>
                <h3>Apprendre ...</h3>
                <ul id='list'>
                    {this.props.articles.map((article) => 
                        <li key={article.id} onClick={() => this.props.displayArticle(article.id)}>{article.title}</li> 
                    )}
                </ul>
            </div>
        );
    };
};

export default ArticleList;