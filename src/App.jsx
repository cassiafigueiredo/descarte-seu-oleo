import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Dicas from './components/Dicas/Dicas'
import Agenda from './components/Agenda/Agenda'
import Informativo from './components/Informativo/Informativo'

function App() {
 

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dicas" element={<Dicas />} />
      </Routes>
    </Router>
     <Agenda/>
     <Informativo/>
    </>
  )
}

export default App
