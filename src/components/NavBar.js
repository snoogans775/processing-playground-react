import React, {useState} from 'react'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: props.fields,
            selection: null,
            onClick: props.onClick
        }
    }

    handleClick(field) {
        this.setState({selection: field});
    }

    render() {
        return (
            <div className="NavBar">
                <NavButton 
                    title='About'
                    onClick={() => this.handleClick('About')}
                />
                <NavButton
                    title='Contact'
                    onClick={() => this.handleClick('Contact')}
                />
            </div>
        )
    }
}

function NavButton(props) {
     return (
        <div 
            className="NavButton"
            onClick={props.onClick}
        >
            {props.title}
        </div>
     )
}

function DropDown(props) {
    return <div className="DropDown">{props.textContent}</div>
}

export default NavBar;