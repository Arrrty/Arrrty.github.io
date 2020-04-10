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
            activeTab: "location"
        }
    }

    toggleTab(tab) {
        this.setState({
            activeTab: tab
        });
    }

    render() {
        if (this.props.className == "main") {
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
                        activeTab={this.state.activeTab}
                        onClick={tab => this.toggleTab(tab)}
                    />
                    <Order activeTab={this.state.activeTab} />
                </div>
            );
        }
    }
}

export default Face;