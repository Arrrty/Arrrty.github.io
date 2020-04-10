import React from 'react';


class TableCars extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.radio.ec) {
            return (
                <div className="cars">
                    {
                        this.props.models.map((model, i) => {
                            if (model.price == "12 000 - 25 000 ₽") {
                                return (
                                    <section class="cars__block" onClick={() => this.props.onClick()} key={i}>
                                        <div class="cars__name">
                                            <h2>{this.props.models[i].model}</h2>
                                            <p>{this.props.models[i].price}</p>
                                        </div>
                                        <img src={this.props.models[i].img} alt=""/>
                                    </section>
                                );
                            } 
                        })
                    }
                </div>
            );
        } else if (this.props.radio.prem) {
            return (
                <div className="cars">
                    {
                        this.props.models.map((model, i) => {
                            if (model.price == "10 000 - 32 000 ₽") {
                                return (
                                    <section class="cars__block" onClick={() => this.props.onClick()} key={i}>
                                        <div class="cars__name">
                                            <h2>{this.props.models[i].model}</h2>
                                            <p>{this.props.models[i].price}</p>
                                        </div>
                                        <img src={this.props.models[i].img} alt=""/>
                                    </section>
                                );
                            } 
                        })
                    }
                </div>
            );
        } else {
            return (
                <div className="cars">
                    {
                        this.props.models.map((model, i) => {
                            return (
                                <section class="cars__block" onClick={() => this.props.onClick()} key={i}>
                                    <div class="cars__name">
                                        <h2>{this.props.models[i].model}</h2>
                                        <p>{this.props.models[i].price}</p>
                                    </div>
                                    <img src={this.props.models[i].img} alt=""/>
                                </section>
                            );
                        })
                    }
                </div>
            );
        }
    }
}

export default TableCars;