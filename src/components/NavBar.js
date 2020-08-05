import React, {useState} from 'react'

function Navbar(props) {
    const fields = props.fields;
    return (
        <div className="NavBar">
            {fields.map((field, index) => (
                <NavButton key={index} title={field} />
            ))}
        </div>
    )
}

function NavButton(props) {
    const [selection, setSelection] = useState(null);
     return (
        <div 
            className="NavButton"
            onClick={() => setSelection(alert(props.title))}
        >
            {props.title}
        </div>
     )
}

function DropDown(props) {
    return <div className="DropDown">{props.textContent}</div>
}

export default Navbar;