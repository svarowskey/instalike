import React from 'react';
import SvgHome from '../../other/home';
import SvgExplore from '../../other/explore';
import SvgEvents from '../../other/events';

export default class extends React.Component{
    render(){
        return(
            <div className="h-menu">
                <div className="h-menu-item">
                    <a href="#"><SvgHome /></a>
                </div>
                <div className="h-menu-item">
                    <a href="#"><SvgExplore /></a>
                </div>
                <div className="h-menu-item">
                    <a href="#"><SvgEvents /></a>
                </div>
            </div>
        );
    }
}
