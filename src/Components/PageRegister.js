import React from 'react';

import Header from './Header';
import RegisterForm from './RegisterForm';

class PageRegister extends React.Component {
    render() {
        return(
            <div id='login'>
                <Header/>
                <RegisterForm/>
            </div>
        );
    };
};

export default PageRegister;