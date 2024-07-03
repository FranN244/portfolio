// TODO: Crear nav , footer , main
import './App.css'
import { Nav } from "../components/Nav"
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Technologies } from '../components/Technologies'
import { Projects } from '../components/Projects'
import { Footer } from "../components/Footer"

function App() {

  return (
    // * PÁGINA PRINCIPAL DEL LAYOUT
    <div className='w-full md:w-[80%] xl:w-[60%] md:space-y-2'>
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Technologies></Technologies>
      <Footer></Footer>
    </div>
  )
}

export default App
