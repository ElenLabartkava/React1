import { useState } from "react"

function ImageToggler () {


    const [isVisible, setIsVisible] = useState(true)

    const toggleImageVisibility = ()=> {
        setIsVisible(!isVisible)
    }
    return(

        <div style={{border: "2px solid blue", marginTop: "20px", background:"green", padding:"20px"}}>
        <button onClick={toggleImageVisibility} style={{padding:"20px", borderRadius:"50%", border:"none", backgroundColor:"blue", cursor:"pointer"}}>Click me </button>
       <img src="https://wallpapercave.com/wp/wp4088642.jpg" style={{width:"500px", display:isVisible? "block": "none" }} alt="" />
       </div>
    )
   
}

export default ImageToggler