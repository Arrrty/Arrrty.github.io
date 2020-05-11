import React from 'react';
import SearchCity from './searchCity';
import SearchPoint from './searchPoint';
import Mapimg from '../../assets/img/Rectangle.png';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: {
                className: "search-cities",
                name: "Город",
                searchList: ["Москва", "Казань", "Ульяновск", "Самара", "Тальятти", "Нижний Новгород"]
            },
            points: {
                className: "search-points",
                name: "Пункт выдачи",
                searchList: ["Москва", "Казань", "Ульяновск", "Самара", "Тальятти", "Нижний Новгород"]
            },
        };
    }

    render() {
        return (
            <div class="location tab-item">
                <div class="location-search">
                    <SearchCity
                        className={this.state.cities.className}
                        list={this.state.cities.searchList}
                        name={this.state.cities.name}
                        onChange={(value) => this.props.onChangeCity(value)}
                        city={this.props.location.city}
                    />
                    <SearchPoint
                        className={this.state.points.className}
                        list={this.state.points.searchList}
                        name={this.state.points.name}
                        onChange={(value) => this.props.onChangePoint(value)}
                        point={this.props.location.point}
                    />
                </div>
                <div class="location-map" >
                    <span>Выбрать на карте:</span>
                    <img src={Mapimg} alt={"map"} />
                </div>
            </div>
        );
    }
}

export default Location;