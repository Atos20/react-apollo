//libraries
import { React } from 'react'
import { Switch, Route } from 'react-router-dom';
//pages/compoenents
import Header from '../Header/Header';
import { Home } from '../../Pages/Home/Home'
import { About } from '../../Pages/About/About'
//styles
import './App.css'

const App: React.FC = () => {

  return (
    <>
      <Header />

      <Switch>
        
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>


      </Switch>
    </>
  )
}

export default App
