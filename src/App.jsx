
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './assets/Home'
import { Register } from './assets/Register'
import { Appointments } from './assets/Appointments'
import { Profile } from './assets/Profile'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/profile' element={<Profile/>}/>

       
      </Routes>
    </BrowserRouter>
  )
}

export default App
