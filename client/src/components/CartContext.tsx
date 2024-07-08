import React, { createContext } from "react"
import { Product } from "../data/types"

const CartContext = createContext<{
    cartData: Product[]
    setCartData: React.Dispatch<React.SetStateAction<Product[]>>
}>({
    cartData: [],
    setCartData: () => []
})

export default CartContext