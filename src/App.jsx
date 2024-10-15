

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Rating from './components/rating/Rating'
import Feedbacks from './components/feedbacks/Feedbacks'

function App() {


  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/rating" element={<Rating/>} />
        <Route path="/feedbacks" element={<Feedbacks/>} />
      
     

    </Routes>
</BrowserRouter>


  )
}

export default App
