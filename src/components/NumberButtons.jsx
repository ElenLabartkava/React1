import React, { useState } from 'react';

function NumberButtons(){
       
    const [num1, setNum1] = useState(20)
    const [num2, setNum2] = useState(64)
    const [num3, setNum3] = useState(33)

    const increaseWidth1 = () => {
        setNum1(num1 + 3)
    }

    const increaseWidth2 = () => {
        setNum2(num2 / 2)
    }

    const  increaseWidth3 = () => {
        setNum3(num3 - 1)

    }

     


    return (
        <div>
            <button onClick={increaseWidth1} >{num1}</button>
            <button onClick={increaseWidth2}> {num2}</button>
            <button onClick={increaseWidth3}> {num3}</button>
        </div>

    )
    
}

export default NumberButtons