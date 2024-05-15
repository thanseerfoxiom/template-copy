
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './Routes/PrivateRoute'
import Home from './pages/Private/Home'
import Children from './Routes/Mainlayout'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={
        <PrivateRoute>
          <Children/>
        </PrivateRoute>
      }>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
