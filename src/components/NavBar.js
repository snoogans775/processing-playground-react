import React from 'react';

function NavBar(props) {
    return (
        <div className="NavBar">
            <NavButton 
                title='About'
                onClick={() => props.onClick('p5.js sketches for educational use')}
            />
        </div>
    )
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

function SocialLinks(props) {
    return (
        <div className="SocialLinks">

        </div>
    )
}

export default NavBar;