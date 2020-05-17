import React from 'react';


class TableCars extends React.Component {
    constructor(props) {
        super(props);
    }

    sectionActive(e) {
        console.log(e.target.getElementsByTagName("img")[0].src)
        this.props.onChange(
            e.target.getElementsByTagName("span")[0].innerHTML,
            e.target.getElementsByTagName("h2")[0].innerHTML,
            e.target.getElementsByTagName("img")[0].src
        )
    }

    render() {
        let classActive = " cars__active";
        if (this.props.radio.ec) {
            return (
                <div className="cars">
                    {
                        this.props.models.map((model, i) => {
                            if (model.price == "12 000 - 25 000 ₽" && model.model == this.props.modelActive) {
                                return (
                                    <section class={"cars__block" + classActive} onClick={(e) => this.sectionActive(e)} key={i}>
                                        <div class="cars__name">
                                            <h2>{this.props.models[i].model}</h2>
                                            <p>{this.props.models[i].price}</p>
                                            <span>{this.props.models[i].mark}</span>
                                        </div>
                                        <img src={this.props.models[i].img} alt=""/>
                                    </section>
                                );
                            } else if (model.price == "12 000 - 25 000 ₽") {
                                return (
                                    <section class="cars__block" onClick={(e) => this.sectionActive(e)} key={i}>
                                        <div class="cars__name">
                                            <h2>{this.props.models[i].model}</h2>
                                            <p>{this.props.models[i].price}</p>
                                            <span>{this.props.models[i].mark}</span>
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
                            if (model.price == "10 000 - 32 000 ₽" && model.model == this.props.modelActive) {
                                return (
                                    <section class={"cars__block" + classActive} onClick={(e) => this.sectionActive(e)} key={i}>
                                        <div class="cars__name">
                                            <h2>{this.props.models[i].model}</h2>
                                            <p>{this.props.models[i].price}</p>
                                            <span>{this.props.models[i].mark}</span>
                                        </div>
                                        <img src={this.props.models[i].img} alt=""/>
                                    </section>
                                );
                            } else if (model.price == "10 000 - 32 000 ₽") {
                                return (
                                    <section class="cars__block" onClick={(e) => this.sectionActive(e)} key={i}>
                                        <div class="cars__name">
                                            <h2>{this.props.models[i].model}</h2>
                                            <p>{this.props.models[i].price}</p>
                                            <span>{this.props.models[i].mark}</span>
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
                            if (model.model == this.props.modelActive) {
                                return (
                                    <section class={"cars__block" + classActive} onClick={(e) => this.sectionActive(e)} key={i}>
                                        <div class="cars__name">
                                            <h2>{this.props.models[i].model}</h2>
                                            <p>{this.props.models[i].price}</p>
                                            <span>{this.props.models[i].mark}</span>
                                        </div>
                                        <img src={this.props.models[i].img} alt=""/>
                                    </section>
                                );
                            } else {
                                return (
                                    <section class="cars__block" onClick={(e) => this.sectionActive(e)} key={i}>
                                        <div class="cars__name">
                                            <h2>{this.props.models[i].model}</h2>
                                            <p>{this.props.models[i].price}</p>
                                            <span>{this.props.models[i].mark}</span>
                                        </div>
                                        <img src={this.props.models[i].img} alt=""/>
                                    </section>
                                );
                            }
                        })
                    }
                </div>
            );
        }
    }
}

export default TableCars;