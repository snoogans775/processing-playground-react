import React from 'react';
import {NavBar} from './layout.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            fields: ['About', 'Contact'],
            selection: props.selection
        }
    }

    handleClick(currentSelection) {
        this.setState({selection: currentSelection});
    }
    render() {
        return (
            <div className="Header">
                <h1>{this.state.title}</h1>
                <NavBar 
                    onClick={() => this.handleClick(this.state.selection)}
                    fields={this.state.fields}
                />
            </div>
        )
    }
}



export default Header;