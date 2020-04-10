import React from 'react';
import Sonata from '../../assets/img/image 2.png';

function Total(props) {
    return (
        <div class="total tab_item">
            <div class="total__container">
                <div class="total__info">
                    <h2>Hyndai, i30 N</h2>
                    <span>K 761 HA 73</span>
                    <p><b>Топливо</b> 100%</p>
                    <p><b>Доступна</b> с 12.06.2019 12:00</p>
                </div>
                <img src={Sonata} alt="Sonata"/>
            </div>
        </div>
    );
}

export default Total;