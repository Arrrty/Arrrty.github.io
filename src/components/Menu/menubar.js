import React from 'react';
import Burger from './burger';
import Menu from './menu';
import Language from './lan';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            class: "menu",
            language: "Eng"
        };
    }
    showMenu() {
        const menu = document.querySelector("menu");
        this.props.onClick()
        
        if (this.state.display) {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
        this.setState({
            display: !this.state.display,
            class: (this.state.class == "menu") ? "menu__active" : "menu"
        });
    }
    switchLang() {
        this.setState({
            language: (this.state.language == "Eng") ? "Рус" : "Eng"
        });
    }
    render() {
        return (
            <div class={this.state.class}>
                <Burger onClick={() => this.showMenu()}/>
                <Menu />
                <Language 
                    onClick={() => this.switchLang()}
                    text={this.state.language}
                />
            </div>
        );
    }
}

export default MenuBar;