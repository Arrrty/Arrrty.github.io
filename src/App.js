import React from 'react';
import './App.css';
import MenuBar from './components/Menu/menubar';
import Face from './components/Face/face';
import Slider from './components/Slider/slider';
import Popup from './components/Order/popup';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Main-page",
        };
    }

    transition() {
        this.setState({
            location: (this.state.location == "Main-page" ? "Order-page" : "Main-page")
        });
    }

    render() {
        if (this.state.location == "Main-page") {
            return (
                <div className="flex-display">
                    <MenuBar location={this.state.location}/>
                    <Face
                        className="main"
                        onClick={() => this.transition()} 
                    />
                    <Slider />
                </div>
            );
        } else {
            return (
                <div class="flex-display">
                    <MenuBar />
                    <Face
                        className="main-order"
                        onClick={() => this.transition()} 
                    />
                    <Popup />
                </div>
            );
        }
    }
}

export default App;
