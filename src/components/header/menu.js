import React from 'react';
import SvgHome from '../../other/home';
import SvgExplore from '../../other/explore';
import SvgEvents from '../../other/events';

export default class extends React.Component{
    render(){
        return(
            <div className="h-menu">
                <div className="h-menu-item"><SvgHome /></div>
                <div className="h-menu-item"><SvgExplore /></div>
                <div className="h-menu-item"><SvgEvents /></div>
            </div>
        );
    }
}
