import React from 'react';

function Burger(props) {
    return (
        <div 
            className="menu__burger"
            onClick={props.onClick}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
      );
}

export default Burger;
