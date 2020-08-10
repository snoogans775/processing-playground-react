import React from 'react';
import {NavBar} from './layout.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Processing Playground",
            subtitle: null,
            toggleSubtitle: false

        }
    }

    handleClick(msg) {
        this.state.toggleSubtitle = !this.state.toggleSubtitle;
        if (this.state.toggleSubtitle) {
            this.setState({subtitle: msg});
        }
        else {
            this.setState({subtitle: null});
        }
    }
    render() {
        return (
            <div className="Header">
                <div id="title"><h1>{this.state.title}</h1></div>
                <div id="subtitle">{this.state.subtitle}</div>
                <NavBar 
                    onClick={field => this.handleClick(field)}
                    fields={this.state.fields}
                />
            </div>
        )
    }
}



export default Header;