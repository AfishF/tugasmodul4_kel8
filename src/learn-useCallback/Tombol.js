import React from 'react';

function Tombol({ handleClick, children }) {
    console.log('Rendering Tombol - ', children)
    return (
        <button className="Button" onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Tombol)