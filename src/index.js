import React from 'react';
import ReactDOM from 'react-dom';

function Burger(props) {
    return (
        <div 
            className="menu__burger"
            onClick={props.onClick}
        >
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
        <div 
            className="menu__language"
            onClick={props.onClick}
        >
            <p>{props.text}</p>
        </div>
      );
}

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

function Main(props) {
    return (
        <main>
            <h1>Каршеринг</h1>
            <h1> Need for drive</h1>
            <p>Поминутная аренда авто твоего города</p>
            <button onClick={props.onClick}>Забронировать</button>
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

function Location(props) {
    return (
        <div class="location tab-item">
            <div class="location-search">
                <div class="search-cities">
                    <span>Город</span>
                    <div class="search-cities__form">
                        <div>
                            <input type="text" placeholder="Начните вводить город ..." onkeyup="filter('cities')" />
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                            </svg>      
                        </div>
                        <ul class="search-cities__list">
                            <li><a href="#" onclick="fill()">Москва</a></li>
                            <li><a href="#" onclick="fill()">Казань</a></li>
                            <li><a href="#" onclick="fill()">Ульяновск</a></li>
                            <li><a href="#" onclick="fill()">Самара</a></li>
                            <li><a href="#" onclick="fill()">Тальятти</a></li>
                            <li><a href="#" onclick="fill()">Нижний Новгород</a></li>
                            <li><a href="#" onclick="fill()">Пермь</a></li>
                        </ul>
                    </div>
                </div>
                <div class="search-points">
                    <span>Пункт выдачи</span>
                    <div class="search-points__form">
                        <div>
                            <input type="text" placeholder="Начните вводить пункт ..." onkeyup="filter('point')" />
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                            </svg>      
                        </div>
                        <ul class="search-points__list">
                            <li><a href="#about" onclick="fill()">Москва</a></li>
                            <li><a href="#base" onclick="fill()">Казань</a></li>
                            <li><a href="#blog" onclick="fill()">Ульяновск</a></li>
                            <li><a href="#contact" onclick="fill()">Самара</a></li>
                            <li><a href="#custom" onclick="fill()">Тальятти</a></li>
                            <li><a href="#support" onclick="fill()">Нижний Новгород</a></li>
                            <li><a href="#tools" onclick="fill()">Пермь</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="location-map" >
                <span>Выбрать на карте:</span>
                <img src="src/img/Rectangle.png" alt="Здесь должна быть карта" />
            </div>
        </div>
    );
}

function Model(props) {
    return (
        <div class="model tab_item">
            <div class="sorting-cars">
                <input type="radio" name="radiobutton" id="r1" checked/><label for="r1"> Все модели </label>
                <input type="radio" name="radiobutton" id="r2"/><label for="r2"> Эконом </label>
                <input type="radio" name="radiobutton" id="r3"/><label for="r3"> Премиум </label>
            </div>
            <div class="cars">
                <section class="cars__block">
                    <div class="cars__name">
                        <h2>ELANTRA</h2>
                        <p>12 000 - 25 000 ₽</p>
                    </div>
                    <img src="src/img/image 1.png" alt=""/>
                </section>
                <section class="cars__block">
                    <div class="cars__name">
                        <h2>i30 N</h2>
                        <p>10 000 - 32 000 ₽</p>
                    </div>
                    <img src="src/img/image 2.png" alt=""/>
                </section>
                <section class="cars__block">
                    <div class="cars__name">
                        <h2>CRETA</h2>
                        <p>12 000 - 25 000 ₽</p>
                    </div>
                    <img src="src/img/image 3.png" alt=""/>
                </section>
                <section class="cars__block">
                    <div class="cars__name">
                        <h2>SONATA</h2>
                        <p>10 000 - 32 000 ₽</p>
                    </div>
                    <img src="src/img/image 4.png" alt=""/>
                </section>
                <section class="cars__block">
                    <div class="cars__name">
                        <h2>ELANTRA</h2>
                        <p>12 000 - 25 000 ₽</p>
                    </div>
                    <img src="src/img/image 1.png" alt=""/>
                </section>
                <section class="cars__block">
                    <div class="cars__name">
                        <h2>i30 N</h2>
                        <p>10 000 - 32 000 ₽</p>
                    </div>
                    <img src="src/img/image 2.png" alt=""/>
                </section>
            </div>
        </div>
    );
}

function Extra(props) {
    return (
        <div class="extra tab_item">
            <div class="extra__color">
                <p>Цвет</p>
                <input type="radio" name="radiobutton-color" id="c1" checked/><label for="c1">Любой</label>
                <input type="radio" name="radiobutton-color" id="c2"/><label for="c2">Красный</label>
                <input type="radio" name="radiobutton-color" id="c3"/><label for="c3">Голубой</label>
            </div>
            <div class="extra__date">
                <p>Дата аренды</p>
                <span>С</span>
                <div class="extra__date-from">
                    <div>
                        <input type="text" placeholder="Начните вводить город ..." onkeyup="filter('cities')"/>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                        </svg>
                    </div>
                </div>
                <span>По</span>
                <div class="extra__date-by">
                    <div>
                        <input type="text" placeholder="Начните вводить город ..." onkeyup="filter('cities')"/>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="extra__tariff">
                <p>Тариф</p>
                <input type="radio" name="radiobutton-tariff" id="t1" checked/><label for="t1">Поминутно, 7₽/мин</label><br/>
                <input type="radio" name="radiobutton-tariff" id="t2"/><label for="t2">На сутки, 1999 ₽/сутки</label>
            </div>
            <div class="extra__services">
                <p>Доп услуги</p>
                <input type="checkbox" name="radiobutton" id="s1"/><label for="s1">Полный бак, 500р</label><br/>
                <input type="checkbox" name="radiobutton" id="s2"/><label for="s2">Детское кресло, 200р</label><br/>
                <input type="checkbox" name="radiobutton" id="s3"/><label for="s3 ">Правый руль, 1600р</label><br/>
            </div>
        </div>
    );
}

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
                <img src="src/img/image 2.png" alt=""/>
            </div>
        </div>
    );
}

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            class: "menu",
            language: "Eng"
        };
    }
    showMenu() {
        const menu = document.querySelector("menu");
        let main
        if (this.props.location == "Main-page") {
            main = document.querySelector(".main");
        } else {
            main = document.querySelector(".main-order");
        }
        if (this.state.display) {
            menu.style.display = 'none';
            main.style.backgroundColor = 'white';
            for (let i=0; i < main.children.length; i++) {
                main.children[i].style.opacity = 1;
            }
        } else {
            menu.style.display = 'block';
            main.style.backgroundColor = 'black';
            for (let i=0; i < main.children.length; i++) {
                main.children[i].style.opacity = 0;
            }
        }
        this.setState({
            display: !this.state.display,
            class: (this.state.class == "menu") ? "menu__active" : "menu"
        });
    }
    switchLang() {
        this.setState({
            language: (this.state.language == "Eng") ? "Рус" : "Eng"
        });
    }
    render() {
        return (
            <div class={this.state.class}>
                <Burger onClick={() => this.showMenu()}/>
                <Menu />
                <Language 
                    onClick={() => this.switchLang()}
                    text={this.state.language}
                />
            </div>
        );
    }
}

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSpan(tab, tabName) {
        return (
            <span class="section" onClick={() => this.props.onClick(tab)}>{tabName}
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
                </svg>
            </span> 
        )
    }

    render() {
        return (
            <nav>
                {this.renderSpan("location", "Местоположение")}
                {this.renderSpan("model", "Модель")}
                {this.renderSpan("extra", "Дополнительно")}
                {this.renderSpan("total", "Итого")}
            </nav>
        );
    }
}

class Face extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "location"
        }
    }

    toggleTab(tab) {
        this.setState({
            activeTab: tab
        });
    }

    render() {
        if (this.props.className == "main") {
            return (
                <div className={this.props.className}>
                    <Header />
                    <Main onClick={() => this.props.onClick()}/>
                    <Footer />
                </div>
            );
        } else {
            return (
                <div className={this.props.className}>
                    <Header onClick={() => this.props.onClick()}/>
                    <Nav onClick={tab => this.toggleTab(tab)}/>
                    <Order activeTab={this.state.activeTab} />
                </div>
            );
        }
    }
}

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

class Order extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let tab
        if (this.props.activeTab == 'location') {
            tab = <Location />
        } else if (this.props.activeTab == 'model') {
            tab = <Model />
        } else if (this.props.activeTab == 'extra') {
            tab = <Extra />
        } else {
            tab = <Total />
        }  
        return (
            <div class="order">
               <div class="board-order">
                    {atab}
                </div>
                <Info />
            </div>
        );
    }
}

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
                 <button onclick = "popupShow()">Выбрать модель</button>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Main-page",
        };
    }

    transition() {
        this.setState({
            location: (this.state.location == "Main-page" ? "Order-page" : "Main-page")
        });
    }

    render() {
        if (this.state.location == "Main-page") {
            return (
                <div className="flex-display">
                    <MenuBar location={this.state.location}/>
                    <Face
                        className="main"
                        onClick={() => this.transition()} 
                    />
                    <Slider />
                </div>
            );
        } else {
            return (
                <div class="flex-display">
                    <MenuBar />
                    <Face
                        className="main-order"
                        onClick={() => this.transition()} 
                    />
                </div>
            );
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.app')
);
  