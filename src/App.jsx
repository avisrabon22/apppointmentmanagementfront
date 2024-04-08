
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home } from './assets/Home'
import { Register } from './assets/Register'
import { Appointments } from './assets/Appointments'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/appointments' element={<Appointments/>}/>

       
      </Routes>
    </BrowserRouter>
  )
}

export default App
