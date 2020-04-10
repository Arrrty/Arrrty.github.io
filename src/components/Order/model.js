import React from 'react';
import Elantraimg from '../../assets/img/image 1.png';
import i30img from '../../assets/img/image 2.png';
import Cretaimg from '../../assets/img/image 3.png';
import Sonataimg from '../../assets/img/image 4.png';
import TableCars from './tableCars';

class Model extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            radio: {
                all:  true,
                ec: false,
                prem: false
            },
            models: [
                {
                    model: "ELANTRA",
                    price: "12 000 - 25 000 ₽",
                    img: Elantraimg
                },
                {
                    model: "i30 N",
                    price: "10 000 - 32 000 ₽",
                    img: i30img
                },
                {
                    model: "CRETA",
                    price: "12 000 - 25 000 ₽",
                    img: Cretaimg
                },
                {
                    model: "SONATA",
                    price: "10 000 - 32 000 ₽",
                    img: Sonataimg
                },
                {
                    model: "ELANTRA",
                    price: "12 000 - 25 000 ₽",
                    img: Elantraimg
                },
                {
                    model: "i30 N",
                    price: "10 000 - 32 000 ₽",
                    img: i30img
                },
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    sectionActive(event) {
        let a = this;
        console.log(a)
    }

    handleChange(event) {
        const name = event.target.name;
        console.log(name)

        if (name == "all") {
            this.setState({radio: {
                all: true, ec: false, prem: false
            }});
        } else if (name == "ec") {
            this.setState({radio: {
                all: false, ec: true, prem: false
            }});
        } else {
            this.setState({radio: {
                all: false, ec: false, prem: true
            }});
        }
    }

    render() {
        return (
            <div class="model tab_item">
                <div class="sorting-cars">
                    <input type="radio" checked={this.state.radio.all} onChange={this.handleChange} name="all" id="r1" /><label for="r1"> Все модели </label>
                    <input type="radio" checked={this.state.radio.ec} onChange={this.handleChange} name="ec" id="r2"/><label for="r2"> Эконом </label>
                    <input type="radio" checked={this.state.radio.prem} onChange={this.handleChange} name="prem" id="r3"/><label for="r3"> Премиум </label>
                </div>
                <TableCars
                    onClick={() => this.sectionActive()}
                    models={this.state.models}
                    radio={this.state.radio}
                />
            </div>
        );
    }
}

export default Model;