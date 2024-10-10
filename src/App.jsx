import './App.css'
import WidthBox from './Components/WidthBox.jsx'
import NumberButtons from './components/NumberButtons.jsx'
import RandomButton from './components/RandomButton.jsx'
import RandomColorBox from './components/RandomColorBox.jsx'
import ImageToggler from './components/ImageToggler.jsx'
import SayHelloComponent from './components/SayHelloComponent.jsx'




function App() {
  return (

    <>
    <WidthBox/>
    <NumberButtons/>
    <RandomButton/>
    <RandomColorBox></RandomColorBox>

    <ImageToggler/>

    <SayHelloComponent name="Nika" age={22} />
      <SayHelloComponent name="Lasha" age={30} />
      <SayHelloComponent name="Mariam" age={25} />

    

    

     </>
    
  )
}

export default App
