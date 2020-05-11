import React from 'react';
import popupShow from './popupShow';

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButton(check, tab, text) {
        if (tab && check) {
            return (
            <button onClick={() => this.props.onClick(tab)}>{text}</button>
            )
        } else if (check) {
            if (!this.props.confirm[0]) {
                return (
                    <button 
                        onClick={() => popupShow()}
                    >
                    Заказать
                    </button>
                )
            } else {
                return (
                    <button 
                        className="cancel"
                        onClick={() => this.props.onChange()}
                    >
                    Отменить
                    </button>
                )
            }
        } else {
            return (
                <button disabled>{text}</button>
            )
        }
    }

    renderExtra(text, value1, value2) {
        let v2;
        if (value2) {
            v2 = ", " + value2
        }
        if (text == "Длительность аренды") {
           let day1 = value1[0].slice(8, 10)
           let month1 = value1[0].slice(5, 7)
           let year1 = value1[0].slice(0, 4)
           let day2 = value1[2].slice(8, 10)
           let month2 = value1[2].slice(5, 7)
           let year2 = value1[2].slice(0, 4)
           let day = day2 - day1
           let month = month2 - month1
           let year = year2 - year1
            let hour1 = value1[1].slice(0, 2)
            let min1 = value1[1].slice(3)
            let hour2 = value1[3].slice(0, 2)
            let min2 = value1[3].slice(3)
            let hour = hour2 - hour1
            let min = min2 - min1
            console.log(hour)
            console.log(min)
            value1 = ""
            if (!(hour <= 0)) {
                value1 = hour + "ч"
            }
            if (!(min <= 0)) {
                value1 = value1 + " " + min + "м"
            }
        }
        return (
            <div class="info__point"> 
                <span>{text}</span>
                <span></span>
                <span>{value1}{v2}</span>
            </div>
        )
    }

    render() {
        if (this.props.location.city !== "" && this.props.location.point !== "" && this.props.activeTab.location) {
            return (
                <div class="info">  
                     <h2>Ваш заказ:</h2>
                     <div className="info__list">
                        {this.renderExtra("Пункт выдачи", this.props.location.city, this.props.location.point)}
                     </div>
                     <div class="info__price">
                            <p><b>Цена:</b> - </p>
                        </div>
                        {this.renderButton(this.props.location.point, "model", "Выбрать модель")}
                </div>
            );
        } else if (this.props.location.city !== "" && this.props.location.point !== "" && this.props.activeTab.model) {
            return (
                <div class="info">  
                     <h2>Ваш заказ:</h2>
                     <div className="info__list">
                        {this.renderExtra("Пункт выдачи", this.props.location.city, this.props.location.point)}
                        {this.renderExtra("Модель", this.props.car.mark, this.props.car.model)}
                     </div>
                     <div class="info__price">
                         <p><b>Цена:</b> - </p>
                     </div>
                     {this.renderButton(this.props.car.model, "extra", "Дополнительно")}
                </div>
            );
        } else if (this.props.location.city !== "" && this.props.location.point !== "" && this.props.activeTab.extra) {
            return (
                <div class="info">
                     <h2>Ваш заказ:</h2>
                     <div className="info__list">
                        {this.renderExtra("Пункт выдачи", this.props.location.city, this.props.location.point)}
                        {this.renderExtra("Модель", this.props.car.mark, this.props.car.model)}
                        {this.renderExtra("Цвет", this.props.extra.color)}
                        {this.renderExtra("Длительность аренды", this.props.extra.date)}
                        {this.renderExtra("Тариф", this.props.extra.tariff[0] ? "Поминутно" : "На сутки")}
                        {
                            this.props.extra.service.map((service, i) => {
                                if (i == 0 && service) {
                                    return this.renderExtra("Полный бак", "Да")
                                } else if (i == 1 && service) {
                                    return this.renderExtra("Детское кресло", "Да")
                                } else if (i == 2 && service) {
                                    return this.renderExtra("Правый руль", "Да")
                                }
                            })
                        }
                     </div>
                     <div class="info__price">
                         <p><b>Цена:</b> - </p>
                     </div>
                     {this.renderButton(this.props.extra.date[3], "total", "Итого")}
                </div>
            );
        } else if (this.props.location.city !== "" && this.props.location.point !== "" && this.props.activeTab.total) {
            return (
                <div class="info">  
                     <h2>Ваш заказ:</h2>
                     <div className="info__list">
                        {this.renderExtra("Пункт выдачи", this.props.location.city, this.props.location.point)}
                        {this.renderExtra("Модель", this.props.car.mark, this.props.car.model)}
                        {this.renderExtra("Цвет", this.props.extra.color)}
                        {this.renderExtra("Длительность аренды", this.props.extra.date)}
                        {this.renderExtra("Тариф", this.props.extra.tariff[0] ? "Поминутно" : "На сутки")}
                        {
                            this.props.extra.service.map((service, i) => {
                                if (i == 0 && service) {
                                    return this.renderExtra("Полный бак", "Да")
                                } else if (i == 1 && service) {
                                    return this.renderExtra("Детское кресло", "Да")
                                } else if (i == 2 && service) {
                                    return this.renderExtra("Правый руль", "Да")
                                }
                            })
                        }
                     </div>
                     <div class="info__price">
                         <p><b>Цена:</b> - </p>
                     </div>
                     {this.renderButton(true, "", "Заказать")}
                </div>
            );
        } else {
            return (
                <div class="info">  
                     <h2>Ваш заказ:</h2>
                     <div className="info__list">
                        {this.renderExtra("Пункт выдачи", " - ")}
                     </div>
                     <div class="info__price">
                         <p><b>Цена:</b> - </p>
                     </div>
                     <button disabled>Выбрать модель</button>
                </div>
            );
        }

    }
}

export default Info;