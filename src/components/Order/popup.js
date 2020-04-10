import React from 'react';
import popupShow from './popupShow';

class Popup extends React.Component {

    render() {
        return (
            <div class="popup">
                <div class="popup__confirm">
                    <span>Подтвердить заказ</span>
                    <button onClick ={() =>  popupShow()}>Подтвердить</button>
                    <button onClick ={() =>  popupShow()}>Вернуться</button>
                </div>
            </div>
        );
    }
}

export default Popup;