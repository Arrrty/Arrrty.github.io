import React from 'react';

function Language(props) {
    return (
        <div 
            className="menu__language"
            onClick={props.onClick}
        >
            <p>{props.text}</p>
        </div>
      );
}

export default Language;