import React from 'react';
import Menu from './header/menu';
import Search from './header/search';

export default class extends React.Component{
    render(){
        return(
            <header className="header-wrap">
                <div className="header-container">
                    <div className="h-logo-container">
                        <div className="h-logo d-flex-row">
                            <a className="h-logo-img" href="/"><img src="src/other/logo.png" /></a>
                        </div>
                    </div>
                    <div className="h-search-container">
                        <Search />
                    </div>
                    <div className="h-menu-container">
                        <Menu />
                    </div>
                </div>
            </header>
        );
    }
}
