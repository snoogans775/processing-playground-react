import React, {useState} from 'react'

function NavBar(props) {
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
    const [selected, setSelection] = useState(false);
    
     return (
        <div 
            className="NavButton"
            onClick={() => setSelection(() => setSelection(true))}
        >
            {props.title}
        </div>
     )
}

function DropDown(props) {
    return <div className="DropDown">{props.textContent}</div>
}

export default NavBar;