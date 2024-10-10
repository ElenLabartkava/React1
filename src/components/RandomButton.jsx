import { useState } from "react"


function RandomButton(){
 

    const [randomNumber, setRandomNumber] = useState(0)

    const getRendomNumber = () =>{
        setRandomNumber(Math.floor(Math.random() * 100))

    }
          

    return (

        <button style={{padding: "40px", border: " 2px solid blue", borderRadius: "20px", color: "whitesmoke", backgroundColor: "gold"}} onClick={getRendomNumber}>{randomNumber}</button>
    )
}

export default RandomButton