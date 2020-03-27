import React from 'react';
import ReactDOM from 'react-dom';

function Burger(props) {
    return (
        <div class="menu__burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
      );
}

function Menu(props) {
    return (
        <menu>
            <li><a href="#">ПАРКОВКА</a></li>
            <li><a href="#">СТРАХОВКА</a></li>
            <li><a href="#">БЕНЗИН</a></li>
            <li><a href="#">ОБСЛУЖИВАНИЕ</a></li>
            <ol>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ol>
        </menu>
    );
}

function Language(props) {
    return (
        <div class="menu__language">
            <p>Eng</p>
            <p>Рус</p>
        </div>
      );
}

function Header(props) {
    return (
        <header>
            <div class="header__logo"><a href="#">Need for drive</a></div>
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

function Main(props) {
    return (
        <main>
            <h1>Каршеринг</h1>
            <h1> Need for drive</h1>
            <p>Поминутная аренда авто твоего города</p>
            <button onclick="location.pathname = 'order-page.html'">Забронировать</button>
        </main>
      );
}

function Footer(props) {
    return (
        <footer>
          <p>© 2016-2019 «Need for drive»</p>
          <a class="call" href="tel:8(495)234-22-44">8 (495) 234-22-44</a>
        </footer>
      );
}

class MenuBar extends React.Component {
    render() {
        return (
            <div class="menu">
                <Burger />
                <Menu />
                <Language />
            </div>
        );
    }
}

class Face extends React.Component {
    render() {
        return (
            <div class="main">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide slide1">
                    <div class="swiper-slide__content">
                    <h2>Бесплатная парковка</h2>
                    <p>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                    <button>Подробнее</button>
                    </div>
                </div>
                <div class="swiper-slide slide2">
                    <div class="swiper-slide__content">
                    <h2>Страховка</h2>
                    <p>Полная страховка страховка автомобиля</p>
                    <button>Подробнее</button>
                    </div>
                </div>
                <div class="swiper-slide slide3"> 
                    <div class="swiper-slide__content">
                    <h2>Бензин</h2>
                    <p>Полный бак на любой заправке города за наш счёт</p>
                    <button>Подробнее</button>
                    </div>
                </div>
                <div class="swiper-slide slide4">
                    <div class="swiper-slide__content">
                    <h2>Обслуживание</h2>
                    <p>Автомобиль проходит еженедельное ТО</p>
                    <button>Подробнее</button>
                    </div>
                </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div class="flex-display">
                <MenuBar />
                <Face />
                <Slider />
            </div>
        );
    }
}
  
ReactDOM.render(
    <App />,
    document.querySelector('.app')
);
  