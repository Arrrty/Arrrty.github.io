import React from 'react';

function popupShow() {
    let popup = document.querySelector(".popup");
    if (popup.style.display == 'none') {
        popup.style.display = 'flex';
    } else {
        popup.style.display = 'none';
    }
}

export default popupShow;