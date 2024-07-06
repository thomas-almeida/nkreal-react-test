
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Cart from './views/Cart'
import DetailProduct from './views/DetailProduct'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/carrinho' element={<Cart />}></Route>
        <Route path='/detalhes' element={<DetailProduct />}></Route>
      </Routes>
    </Router>
  )
  
}

export default App
