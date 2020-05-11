import React from 'react';
import popupShow from './popupShow';

function Popup(props) {
        return (
            <div class="popup">
                <div class="popup__confirm">
                    <span>Подтвердить заказ</span>
                    <button 
                        onClick={() =>  popupShow(props.onChange, true)}
                    >
                    Подтвердить
                    </button>
                    <button onClick ={() =>  popupShow(props, false)}>Вернуться</button>
                </div>
            </div>
        )
}

export default Popup;