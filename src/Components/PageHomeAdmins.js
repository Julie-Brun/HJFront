import React from 'react';

import Header from './Header';
import MenuHomeAdmins from './MenuHomeAdmins';

class PageHomeAdmins extends React.Component {
    render() {
        return(
            <div id="homeAdmin">
                <Header/>
                <div id='homeAdminBody'>
                    <MenuHomeAdmins/>
                </div>
            </div>
        )
    }
}

export default PageHomeAdmins;