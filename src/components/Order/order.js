import React from 'react';
import Location from './location';
import Model from './model';
import Extra from './extra';
import Total from './total';
import Info  from './info';

class Order extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tab
        if (this.props.activeTab == 'location') {
            tab = <Location />
        } else if (this.props.activeTab == 'model') {
            tab = <Model />
        } else if (this.props.activeTab == 'extra') {
            tab = <Extra />
        } else {
            tab = <Total />
        }  
        return (
            <div class="order">
               <div class="board-order">
                    {tab}
                </div>
                <Info />
            </div>
        );
    }
}

export default Order;