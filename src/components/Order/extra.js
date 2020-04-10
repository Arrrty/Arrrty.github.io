import React from 'react';

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

export default Extra;