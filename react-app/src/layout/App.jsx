// TODO: Crear nav , footer , main
import './App.css'
import { Nav } from "../components/Nav"
import { Header } from '../components/Header'

function App() {

  return (
    // * PÁGINA PRINCIPAL DEL LAYOUT
    <div className='h-full  w-full xl:w-[60%]'>
      <Nav></Nav>
      <Header></Header>
    </div>
  )
}

export default App
