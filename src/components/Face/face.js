import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Nav from '../Order/nav';
import Order from '../Order/order';

class Face extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: {
                location: true,
                model: false,
                extra: false,
                total: false
            },
            location: {
                city: "Москва",
                point: "Ульяновск",
            },
            car: {
                mark: "",
                model: "",
                img: ""
            },
            extra: {
                color: "Любой",
                date: [
                    '',
                    '',
                    '',
                    ''
                ],
                tariff: [
                    true,
                    false
                ],
                service: [
                    false,
                    false,
                    false
                ]
            }
        }
    }

    toggleTab(tab) {
        if (tab == "location") {
            this.setState({
                activeTab: {location: true, model: false, extra: false, total: false}
            });
        } else if (tab == "model") {
            this.setState({
                activeTab: {location: false, model: true, extra: false, total: false}
            });
        } else if (tab == "extra") {
            this.setState({
                activeTab: {location: false, model: false, extra: true, total: false}
            });
        } else if (tab == "total") {
            this.setState({
                activeTab: {location: false, model: false, extra: false, total: true}
            });
        }
    }

    changeCity(value) {
        this.setState({
            location: {
                city: value,
                point: this.state.location.point
            }
        })
    }

    changePoint(value) {
        this.setState({
            location: {
                city: this.state.location.city,
                point: value
            }
        })
    }

    changeModel(mark, model, img) {
        console.log(img)
        this.setState({
            car: {mark: mark, model: model, img: img}
        })
    } 
    changeExtra(color, date, tariff, service) {
        console.log(tariff)
        this.setState({
            extra: {
                color: color,
                date: date,
                tariff: tariff,
                service: service
            }
        })
    }

    render() {
        if (this.props.menu) {
            return (
                <div className="background"></div>
            )
        } else if (this.props.className == "main") {
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
                    <Nav
                        onClick={(tab) => this.toggleTab(tab)}
                        activeTab={this.state.activeTab}
                    />
                    <Order
                        onClick={(tab) => this.toggleTab(tab)}
                        onChangeCity={(value) => this.changeCity(value)}
                        onChangePoint={(value) => this.changePoint(value)}
                        onChangeModel={(mark, model, img) => this.changeModel(mark, model, img)}
                        onChangeExtra={(color, date, tariff, service) => this.changeExtra(color, date, tariff, service)}
                        activeTab={this.state.activeTab}
                        location={this.state.location}
                        car={this.state.car}
                        extra={this.state.extra}
                    />
                </div>
            );
        }
    }
}

export default Face;