import { useState } from "react"
 
function RandomColorBox(){

     const [bgColor, setBgColor] = useState('#00BFFF')

     const getRendomColor = () => {
        const letters = '0123456789ABSDEF'
        let color = '#'
        for(let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * letters.length)]
        }

        return color
     }

     const changeColor = () => {
        setBgColor(getRendomColor())
     }


    
    return(
        <div onClick={changeColor} style={{width: "300px", height: "300px", backgroundColor:bgColor}}></div>

    )
}

export default RandomColorBox