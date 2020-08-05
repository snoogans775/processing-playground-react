import React from 'react';
import {NavBar} from './layout.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            selection: null
        }
    }

    handleClick(navButton) {
        this.setState({selection: navButton});
    }
    render() {
        return (
            <div className="Header">
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}



export default Header;