import React from 'react';

function popupShow(props, check) {
    let popup = document.querySelector(".popup");
    if (popup.style.display == 'none') {
        popup.style.display = 'flex';
    } else {
        popup.style.display = 'none';
    }
    if (check) {
        props()
    }
}

export default popupShow;