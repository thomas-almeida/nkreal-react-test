
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Cart from './views/Cart'
import DetailProduct from './views/DetailProduct'
import ProductContext from './components/ProductContext'
import { useState } from 'react'
import { Product } from './data/types'

function App() {

  const [productData, setProductData] = useState<Product>()

  return (

    <ProductContext.Provider value={{ productData, setProductData }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/carrinho' element={<Cart />}></Route>
          <Route path='/detalhes' element={<DetailProduct />}></Route>
        </Routes>
      </Router>
    </ProductContext.Provider>
  )

}

export default App
