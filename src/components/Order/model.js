import React from 'react';
import TableCars from './tableCars';

class Model extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radio: {
                all:  true,
                ec: false,
                prem: false
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;

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
                    models={this.props.models}
                    radio={this.state.radio}
                    onChange={(mark, model, img) => this.props.onChange(mark, model, img)}
                    modelActive={this.props.car.model}
                />
            </div>
        );
    }
}

export default Model;