import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSpan(tab, tabName, activ) {
        return (
            <span className={"section " + activ} onClick={() => this.props.onClick(tab)}>{tabName}
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
                </svg>
            </span> 
        )
    }

    render() {
        if (this.props.activeTab == "location") {
            return (
                <nav>
                    {this.renderSpan("location", "Местоположение", "activ-nav")}
                    {this.renderSpan("model", "Модель", "")}
                    {this.renderSpan("extra", "Дополнительно", "")}
                    {this.renderSpan("total", "Итого", "")}
                </nav>
            );
        } else if (this.props.activeTab == "model") {
            return (
                <nav>
                    {this.renderSpan("location", "Местоположение", "passed-nav")}
                    {this.renderSpan("model", "Модель", "activ-nav")}
                    {this.renderSpan("extra", "Дополнительно", "")}
                    {this.renderSpan("total", "Итого", "")}
                </nav>
            );
        } else if (this.props.activeTab == "extra") {
            return (
                <nav>
                    {this.renderSpan("location", "Местоположение", "passed-nav")}
                    {this.renderSpan("model", "Модель", "passed-nav")}
                    {this.renderSpan("extra", "Дополнительно", "activ-nav")}
                    {this.renderSpan("total", "Итого", "")}
                </nav>
            );
        } else {
            return (
                <nav>
                    {this.renderSpan("location", "Местоположение", "passed-nav")}
                    {this.renderSpan("model", "Модель", "passed-nav")}
                    {this.renderSpan("extra", "Дополнительно", "passed-nav")}
                    {this.renderSpan("total", "Итого", "activ-nav")}
                </nav>
            );
        }
    }
}

export default Nav;