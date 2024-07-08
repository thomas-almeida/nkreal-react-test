
import { productsInThisDrop } from "../data/products"
import { NavLink } from "react-router-dom"
import Button from "./Button"
import { Product } from "../data/types"
import { useContext } from "react"
import ProductContext from "./ProductContext"

export default function ProducList() {

    const { setProductData } = useContext(ProductContext)

    function getInfo(product: Product) {
        setProductData(product)
        localStorage.setItem("currentProductData", JSON.stringify(product))
    }

    return (
        <>
            <div className="product-container font-mono" id="product">
                <ul className="product-list">
                    {
                        productsInThisDrop.map((product) => (

                            <li
                                key={product.id}
                                className="product"
                            >
                                <NavLink
                                    to={`/detalhes?id=${product.id}`}
                                    onClick={() => getInfo(product)}
                                >
                                    <div className="text-black">
                                        <img
                                            src={product.images[0]}
                                            alt={product.description}
                                        />
                                        <h3>{product.name}</h3>
                                        <div className="flex justify-left items-center">
                                            <h4>R${product.price.toFixed(2).replace('.', ',')}</h4>
                                            <div className="tag bg-promo m-10">
                                                <p className="font-mono">A Vista no Pix</p>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                                <Button
                                    text="Adicionar Ao Carrinho"
                                    function={() => getInfo(product)}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}