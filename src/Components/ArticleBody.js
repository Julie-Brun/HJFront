import React from 'react';

import '../css/ArticleBody.css';

class ArticleBody extends React.Component {
    render() {
        return(
            <div id='articleBody'>
                {this.props.articles.map((article) => <h2 key={article.id} style={article.isSelected ? {display: "block"} : {display: "none"}}>{article.title}</h2>)}
                <div id='article'>
                    {this.props.articles.map((article) => <img key={article.id} style={article.isSelected ? {display: "block"} : {display: "none"}} src={article.img}/>)}
                    {this.props.articles.map((article) => <p key={article.id} style={article.isSelected ? {display: "block"} : {display: "none"}}>{article.content}</p>)}
                </div>
            </div>
        );
    };
};

export default ArticleBody;