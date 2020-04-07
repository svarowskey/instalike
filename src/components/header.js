import React from 'react';
import Menu from './header/menu';

export default class extends React.Component{
    render(){
        return(
            <header className="Hz2lF">
                <div className="MWDvN nfCOa">
                    <div className="h-logo-container"><div className="h-logo d-flex-row"><img className="h-logo-img" src="src/other/logo.png" /></div></div>
                    <div className="h-search-container"><div className="h-search"><input type="text" className="input" placeholder="Поиск"></input></div></div>
                    <div className="h-menu-container">
                        <Menu />
                    </div>
                </div>
            </header>
        );
    }
}
