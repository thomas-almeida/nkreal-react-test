import { createContext } from "react"
import { Product } from "../data/types"

const ProductContext = createContext<{
    productData: Product | undefined
    setProductData: React.Dispatch<React.SetStateAction<Product | undefined>>
}>({
    productData: undefined,
    setProductData: () => {}
})
export default ProductContext