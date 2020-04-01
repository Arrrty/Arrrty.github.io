

export function Location() {
    return (
        <div class="board-order">
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

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSpan(tab, tabName) {
        return (
            <span class="section" onClick={this.props.onClick(tab)}>{tabName}
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

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <span class="section" onClick={this.props.onClick("location")}>Местоположение
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
                    </svg>
                </span>              
                <span class="section" onClick={this.props.onClick("model")}>Модель
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
                    </svg>
                </span> 
                <span class="section" onClick={this.props.onClick("extra")}>Дополнительно
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
                    </svg>
                </span>
                <span class="section" onClick={this.props.onClick("total")}>Итого</span>
            </nav>
        );
    }
}


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: document.querySelector("." + this.props.className + "input"),
            svg: document.querySelector("." + this.props.className + " svg"),
            list: document.querySelector("." + this.props.className + "__list")
        }
    }

    fill() {
        let a = event.target;
        console.log(a);
        this.state.input.value = a.innerHTML;
        this.state.list.style.display = "none";
        this.state.svg.style.display = "block"
    }

    filter() {
        var filter, ul, li, a, i;
      
        this.state.list.style.display = "flex";
        filter = this.state.input.value.toUpperCase();
        ul = this.state.list;
        li = ul.getElementsByTagName('li');

        if (this.state.input.value !== "") {
            this.state.svg.style.display = "block"
        } else {
            this.state.svg.style.display = "none"
        }

        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          console.log(a)
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
        }
      }

    render() {
        return (
            <div class={this.props.className}>
                <span>Город</span>
                <div classNamer={className + "__form"}>
                    <div>
                        <input type="text" placeholder="Начните вводить город ..." onKeyUp={this.filter()} />
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                        </svg>      
                    </div>
                    <ul class={className + "__list"}>
                        <li><a href="#" onClick={this.fill()}>Москва</a></li>
                        <li><a href="#" onClick={this.fill()}>Казань</a></li>
                        <li><a href="#" onClick={this.fill()}>Ульяновск</a></li>
                        <li><a href="#" onClick={this.fill()}>Самара</a></li>
                        <li><a href="#" onClick={this.fill()}>Тальятти</a></li>
                        <li><a href="#" onClick={this.fill()}>Нижний Новгород</a></li>
                        <li><a href="#" onClick={this.fill()}>Пермь</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}