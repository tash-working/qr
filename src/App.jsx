

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Rating from './components/rating/Rating'
import Feedbacks from './components/feedbacks/Feedbacks'
import RatingNav from './components/rating/RatingNav'

function App() {


  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/rating/:id" element={<Rating/>} />
        <Route path="/rating" element={<RatingNav/>} />
        <Route path="/feedbacks" element={<Feedbacks/>} />
      
     

    </Routes>
</BrowserRouter>


  )
}

export default App
