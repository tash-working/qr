

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Rating from './components/rating/Rating'

function App() {


  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/rating" element={<Rating/>} />
      
     

    </Routes>
</BrowserRouter>


  )
}

export default App
