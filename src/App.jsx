import './styles/App.css'
import { Navbar } from './components/Navbar'
import { LandingPage } from './components/LandingPage'
import { ItemListContainer } from './components/ItemListContainer'


export const App = () => {
  return (
      <>
    <Navbar/>
    <LandingPage/>
    <ItemListContainer/>
   

      </>
  )
  }