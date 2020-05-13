import React from 'react';

class Slider extends React.Component {
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                <div className="swiper-slide slide1">
                    <div className="swiper-slide__content">
                    <h2>Бесплатная парковка</h2>
                    <p>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                    <button>Подробнее</button>
                    </div>
                </div>
                <div className="swiper-slide slide2">
                    <div className="swiper-slide__content">
                    <h2>Страховка</h2>
                    <p>Полная страховка страховка автомобиля</p>
                    <button>Подробнее</button>
                    </div>
                </div>
                <div className="swiper-slide slide3"> 
                    <div className="swiper-slide__content">
                    <h2>Бензин</h2>
                    <p>Полный бак на любой заправке города за наш счёт</p>
                    <button>Подробнее</button>
                    </div>
                </div>
                <div className="swiper-slide slide4">
                    <div className="swiper-slide__content">
                    <h2>Обслуживание</h2>
                    <p>Автомобиль проходит еженедельное ТО</p>
                    <button>Подробнее</button>
                    </div>
                </div>
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
            </div>
        );
    }
}

export default Slider;