import React from 'react';

import Header from './Header';
import ArticleList from './ArticleList';
import HopeG from './HopeG';
import ArticleBody from './ArticleBody';

import Articles from '../Data/articles';

import '../css/PageLearn.css';

class PageLearn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: Articles,
        }

        this.displayArticle = this.displayArticle.bind(this);
    }

    displayArticle(id) {        
        this.setState(prevState => {
            const updatedArticles = prevState.articles.map(article => {
                if (article.isSelected === true) {
                    return ({
                        ...article,
                        isSelected: false
                    })
                }
                if (article.id === id) {
                    return ({
                        ...article,
                        isSelected: !article.isSelected
                    })
                }
                return article
            })
            console.log(prevState.articles);
            console.log(updatedArticles);

            return {
                articles: updatedArticles
            }
        })
    }

    render() {
        
        return(
            <div id='learn'>
                <Header/>
                <div id='learnBody'>
                    <ArticleList 
                    articles={this.state.articles}
                    displayArticle={this.displayArticle}
                    />
                    <HopeG/>
                    <ArticleBody 
                    articles={this.state.articles}
                    />
                </div>
            </div>
        );
    };
};

export default PageLearn;