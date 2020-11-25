import React from 'react';

function Judul() {
    console.log('Rendering Judul')
    return (
        <div className="Text">
            Use Callback Hooks
        </div>
    )
}

export default React.memo(Judul)