import './styles/App.css'
import { Navbar } from './components/Navbar'
import { LandingPage } from './components/LandingPage'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './components/Footer'



export const App = () => {
  return (
      <>
    <Navbar/>
    <LandingPage/>
    <ItemListContainer/>
    <Footer/>
   

      </>
  )
  }