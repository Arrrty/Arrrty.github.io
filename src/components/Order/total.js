import React from 'react';
// import Sonata from '../../assets/img/image 2.png';

function Total(props) {
    console.log(props.car.img)
    if (!props.confirm[0]) {
        return (
            <div class="total tab_item">
                <div class="total__container">
                    <div class="total__info">
                        <h2>{props.car.mark}, {props.car.model}</h2>
                        <span>K 761 HA 73</span>
                        <p><b>Топливо</b> 100%</p>
                        <p><b>Доступна</b> с {props.extra.date[0]} {props.extra.date[1]}</p>
                    </div>
                    <img src={props.car.img} alt={props.car.mark}/>
                </div>
            </div>
        );
    } else {
        return (
            <div class="total tab_item">
                <h1>Ваш заказ подтверждён</h1>
                <div class="total__container">
                    <div class="total__info">
                        <h2>{props.car.mark}, {props.car.model}</h2>
                        <span>K 761 HA 73</span>
                        <p><b>Топливо</b> 100%</p>
                        <p><b>Доступна</b> с {props.extra.date[0]} {props.extra.date[1]}</p>
                    </div>
                    <img src={props.car.img} alt={props.car.mark}/>
                </div>
            </div>
        );
    }

}

export default Total;