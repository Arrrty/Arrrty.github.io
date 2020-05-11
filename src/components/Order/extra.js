import React from 'react';

class Extra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioColor: [
                {
                    value: true,
                    class: "label-checked"
                },
                {
                    value: false,
                    class: ""
                },
                {
                    value: false,
                    class: ""
                },
                {
                    value: false,
                    class: ""
                },
                {
                    value: false,
                    class: ""
                },
                {
                    value: false,
                    class: ""
                },
            ]
        };
    }

    colorChange(index, e) {
        let color = e.target.name;
        let service = this.state.checkboxServices
        let colorState = this.state.radioColor.map((col, i) => {
            if (index == i) {
                return col = { value: true, class: "label-checked"}
            } else { 
                return col = { value: false, class: ""}
            }
        })

        this.setState({
            radioColor: colorState,
        });

        this.props.onChange(color, this.props.extra.date, this.props.extra.tariff, this.props.extra.service);

    }

    dateChange(e) {
        let date
        if (e.target.name == 'dateWith') {
            date = [
                e.target.value,
                this.props.extra.date[1],
                this.props.extra.date[2],
                this.props.extra.date[3]
            ]
        } else if (e.target.name == 'timeWith') {
            date = [
                this.props.extra.date[0],
                e.target.value,
                this.props.extra.date[2],
                this.props.extra.date[3]
            ]
        } else if (e.target.name == 'dateBy') {
            date = [
                this.props.extra.date[0],
                this.props.extra.date[1],
                e.target.value,
                this.props.extra.date[3]
            ]
        } else if (e.target.name == 'timeBy') {
            date = [
                this.props.extra.date[0],
                this.props.extra.date[1],
                this.props.extra.date[2],
                e.target.value
            ]
        }
        this.props.onChange(this.props.extra.color, date, this.props.extra.tariff, this.props.extra.service);
    }

    tariffChange(e) {
        let tariff
        if (e.target.name == "Поминутно") {
            tariff = [
                true,
                false
            ]
        } else {
            tariff = [
                false,
                true
            ]
        }
        this.props.onChange(this.props.extra.color, this.props.extra.date, tariff, this.props.extra.service);
    }

    servicesChange(e) {
        let service = e.target.name;
        let checkboxServices
        if (service == "Полный бак") {
            checkboxServices = [
                !this.props.extra.service[0],
                this.props.extra.service[1],
                this.props.extra.service[2]
            ]
        } else if (service == "Детское кресло") {
            checkboxServices = [
                this.props.extra.service[0],
                !this.props.extra.service[1],
                this.props.extra.service[2]
            ]
        } else {
            checkboxServices = [
                this.props.extra.service[0],
                this.props.extra.service[1],
                !this.props.extra.service[2]
            ]
        }
        this.props.onChange(this.props.extra.color, this.props.extra.date, this.props.extra.tariff, checkboxServices);
    }

    render () {
        return (
            <div class="extra tab_item">
                <div class="extra__color">
                    <p>Цвет</p>
                    <label className={this.state.radioColor[0].class}>
                        <input
                            type="radio" 
                            checked={this.state.radioColor[0].value} 
                            onChange={(e) => this.colorChange(0, e)} 
                            name="любой"
                        />
                        Любой
                    </label>
                    {
                        this.props.models.map((model, i) => {
                            if (model.model == this.props.car.model) {
                                return (
                                    model.color.map((color, i) => {
                                        return (
                                            <label className={this.state.radioColor[i + 1].class}>
                                                <input 
                                                    type="radio" 
                                                    checked={this.state.radioColor[i + 1].value} 
                                                    onChange={(e) => this.colorChange(i + 1, e)} 
                                                    name={color}
                                                />
                                                {color}
                                            </label>
                                        );
                                    })
                                );
                            }
                        })
                    }
                </div>
                <div class="extra__date">
                    <p>Дата аренды</p>
                    <span>С</span>
                    <div class="extra__date-from">
                        <div>
                            <input 
                                type="date"
                                name="dateWith"
                                onChange={(e) => this.dateChange(e)} 
                            />
                            <input 
                                type="time"
                                name="timeWith"
                                onChange={(e) => this.dateChange(e)} 
                            />
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                            </svg>
                        </div>
                    </div>
                    <span>По</span>
                    <div class="extra__date-by">
                        <div>
                            <input 
                                type="date"
                                name="dateBy"
                                onChange={(e) => this.dateChange(e)}
                            />
                            <input
                                type="time"
                                name="timeBy"
                                onChange={(e) => this.dateChange(e)}
                            />
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="extra__tariff">
                    <p>Тариф</p>
                    <input
                        checked={this.props.extra.tariff[0]} 
                        onChange={(e) => this.tariffChange(e)}
                        type="radio"
                        name="Поминутно"
                        id="t1"
                    />
                    <label for="t1">Поминутно, 7₽/мин</label><br/>
                    <input
                        checked={this.props.extra.tariff[1]} 
                        onChange={(e) => this.tariffChange(e)}
                        type="radio" 
                        name="На сутки"
                        id="t2"
                    />
                    <label for="t2">На сутки, 1999 ₽/сутки</label>
                </div>
                <div class="extra__services">
                    <p>Доп услуги</p>
                    <input
                        checked={this.props.extra.service[0]} 
                        onChange={(e) => this.servicesChange(e)}
                        type="checkbox"
                        name="Полный бак"
                        id="s1"
                    />
                    <label for="s1">Полный бак, 500р</label><br/>
                    <input
                        checked={this.props.extra.service[1]} 
                        onChange={(e) => this.servicesChange(e)}
                        type="checkbox"
                        name="Детское кресло"
                        id="s2"
                    />
                    <label for="s2">Детское кресло, 200р</label><br/>
                    <input
                        checked={this.props.extra.service[2]} 
                        onChange={(e) => this.servicesChange(e)}
                        type="checkbox"
                        name="Правый руль"
                        id="s3"
                    />
                    <label for="s3">Правый руль, 1600р</label><br/>
                </div>
            </div>
        )
    }
}

export default Extra;