import React from 'react';
import Location from './location';
import Model from './model';
import Extra from './extra';
import Total from './total';
import Info  from './info';
import Popup from './popup';
import Elantraimg from '../../assets/img/image 1.png';
import i30img from '../../assets/img/image 2.png';
import Cretaimg from '../../assets/img/image 3.png';
import Sonataimg from '../../assets/img/image 4.png';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            models: [
                {
                    mark: "Hyundai",
                    model: "ELANTRA",
                    price: "12 000 - 25 000 ₽",
                    img: Elantraimg,
                    color: ["красный", "синий"]
                },
                {
                    mark: "Hyundai",
                    model: "i30 N",
                    price: "10 000 - 32 000 ₽",
                    img: i30img,
                    color: ["красный", "синий", "черный"]
                },
                {
                    mark: "Hyundai",
                    model: "CRETA",
                    price: "12 000 - 25 000 ₽",
                    img: Cretaimg,
                    color: ["красный", "голубой"]
                },
                {
                    mark: "Hyundai",
                    model: "SONATA",
                    price: "10 000 - 32 000 ₽",
                    img: Sonataimg,
                    color: ["красный", "черный"]
                },
                {
                    mark: "Toyota",
                    model: "COROLLA",
                    price: "12 000 - 25 000 ₽",
                    img: Elantraimg,
                    color: ["красный", "синий", "голубой", "черный"]
                },
                {
                    mark: "Audi",
                    model: "A4",
                    price: "10 000 - 32 000 ₽",
                    img: i30img,
                    color: ["красный", "синий", "черный"]
                },
            ],
            confirm: [
                false
            ]
        }
    }

    changeConfirm() {
        console.log(!this.state.confirm[0])
        this.setState({
            confirm: [!this.state.confirm[0]]
        });
    }

    render() {
        let tab
        if (this.props.activeTab.location || this.props.location.point == '') {
            tab = <Location 
                onChangePoint={(value) => this.props.onChangePoint(value)}
                onChangeCity={(value) => this.props.onChangeCity(value)}
                location={this.props.location}
                activeTab={this.props.activeTab}
            />
        } else if (this.props.activeTab.model) {
            tab = <Model 
                onChange={(mark, model, img) => this.props.onChangeModel(mark, model, img)}
                car={this.props.car}
                models={this.state.models}
            />
        } else if (this.props.activeTab.extra) {
            tab = <Extra 
                onChange={(color, date, tariff, service) => this.props.onChangeExtra(color, date, tariff, service)}
                models={this.state.models}
                car={this.props.car}
                extra={this.props.extra}
            />
        } else {
            tab = <Total
                car={this.props.car}
                extra={this.props.extra}
                confirm={this.state.confirm}
            />
        }
        return (
            <div class="order">
               <div class="board-order">
                    {tab}
                </div>
                <Info
                    onClick={(tab) => this.props.onClick(tab)}
                    activeTab={this.props.activeTab}
                    location={this.props.location}
                    car={this.props.car}
                    extra={this.props.extra}
                    confirm={this.state.confirm}
                    onChange={() => this.changeConfirm()}
                />
                <Popup 
                    confirm={this.state.confirm}
                    onChange={() => this.changeConfirm()}
                />
            </div>
        );
    }
}

export default Order;