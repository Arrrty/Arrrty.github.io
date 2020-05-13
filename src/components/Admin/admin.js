import React from 'react';
import Login from './login';

class Admin extends React.Component {
    render() {
        return (
            <div className="admin">
                <Login />
            </div>
        )
    }
}

export default Admin;