import React from 'react';

function NavigationItem(props){
    return (
        <li className="column is-mobile">
            <button class="button is-rounded is-outlined is-link">
                <span class="icon">
                    <i className={props.icon}></i>
                    </span>
                <span>{props.text}</span>
            </button>
        </li>
    );
}

export default NavigationItem;