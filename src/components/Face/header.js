import React from 'react';

function Header(props) {
    return (
        <header>
            <div class="header__logo" onClick={props.onClick}>
                <a href="#">Need for drive</a>
            </div>
            <div class="header__region">
            <div class="header__vector-svg">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5401 6.81818C4.9282 6.81818 6.05347 5.71925 6.05347 4.36364C6.05347 3.00803 4.9282 1.90909 3.5401 1.90909C2.15201 1.90909 1.02673 3.00803 1.02673 4.36364C1.02673 5.71925 2.15201 6.81818 3.5401 6.81818Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
                <p>Ульяновск</p>
            </div>
        </header> 
      );
}

export default Header;