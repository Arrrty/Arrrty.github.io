import React from 'react';
import './main.css';
import MenuBar from './components/Menu/menubar';
import Face from './components/Face/face';
import Slider from './components/Slider/slider';
import Admin from './components/Admin/admin';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Main-page",
            menu: false
        };
    }

    transition() {
        this.setState({
            location: (this.state.location == "Main-page" ? "Order-page" : "Main-page")
        });
    }

    showMenu() {
        this.setState({
            menu: (this.state.menu == false ? true : false)
        });
    }

    render() {
        if (this.state.location == "Main-page") {
            return (
                <div className="flex-display">
                    <MenuBar 
                        location={this.state.location}
                        onClick={() => this.showMenu()}
                    />
                    <Face
                        className="main"
                        onClick={() => this.transition()} 
                        menu={this.state.menu}
                    />
                    <Slider />
                </div>
            );
        } else if (this.state.location == "Order-page") {
            return (
                <div class="flex-display">
                    <MenuBar  onClick={() => this.showMenu()}/>
                    <Face
                        className="main-order"
                        onClick={() => this.transition()}
                        menu={this.state.menu}
                    />
                </div>
            );
        } else {
            return (
                <Admin />
            );
        }
    }
}

export default App;
