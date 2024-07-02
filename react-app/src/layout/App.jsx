// TODO: Crear nav , footer , main
import './App.css'
import { Nav } from "../components/Nav"
import { Header } from '../components/Header'
import { About } from '../components/About'

function App() {

  return (
    // * PÁGINA PRINCIPAL DEL LAYOUT
    <div className='h-full  w-full lg:w-[80%] xl:w-[60%] lg:space-y-2'>
      <Nav></Nav>
      <Header></Header>
      <About></About>
    </div>
  )
}

export default App
