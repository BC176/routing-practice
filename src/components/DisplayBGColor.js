import React from 'react';

const DisplayBGColor = props => {
    return (
        <>
            <div style={{ backgroundColor: props.divColor }}>
                <h1 style={{ color: props.textColor }}>The word is: {props.str}</h1>
            </div>
        </>
    )
}

export default DisplayBGColor;