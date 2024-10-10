import React, { useState } from 'react';

function WidthBox(){
    const [width, setWidth] = useState(300)

    const increaseWidth = () => {
        setWidth(width + 10)
    }


    return(
        <div style={{backgroundColor: "red", padding: "20px", borderRadius: "10px", width: `${width}px`}}>
            <button onClick={increaseWidth} style={{backgroundColor: "blue", color:"white", padding: "5px", borderRadius: "20px", border: "none",}} >Click me</button>
        </div>
    )

}

export default WidthBox