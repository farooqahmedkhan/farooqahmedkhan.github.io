import React from 'react';

function NavigationItem(props){
    return (
        <li className="column">
            <div className="level">
                <div className="level-left">
                    <i className={props.icon}></i>
                </div>
                <div className="level-right">
                    <h2>&nbsp;{props.text}</h2>
                </div>
            </div>
        </li>
    );
}

export default NavigationItem;