import React from 'react';
import popupShow from './popupShow';

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="info">  
                 <h2>Ваш заказ:</h2>
                 <div class="info__point"> 
                     <span>Пункт выдачи</span>
                     <span></span>
                     <span>Ульяновск, Нариманова 42</span>
                 </div>
                 <div class="info__price">
                     <p><b>Цена:</b> от 8 000 до 12 000 ₽</p>
                 </div>
                 <button onClick ={() =>  popupShow()}>Выбрать модель</button>
            </div>
        );
    }
}

export default Info;