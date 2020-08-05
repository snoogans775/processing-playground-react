import React from 'react'

function Footer(props) {
    const date = Date.now();
    return (
        <div className="Footer">
            <p>Copyright {date.toString()}</p>
        </div>
        
    )
}

export default Footer;