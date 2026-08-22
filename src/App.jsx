import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a Brandless!" />
    </>
  )
}

export default App