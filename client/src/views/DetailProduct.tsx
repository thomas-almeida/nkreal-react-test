import Button from "../components/Button"
import Navbar from "../components/Navbar"
import ProductContext from "../store/ProductContext"
import CartContext from "../store/CartContext"
import { useContext, useEffect } from "react"
import { productsInThisDrop } from "../data/products"
import { Product } from "../data/types"
import { NavLink } from "react-router-dom"

export default function DetailProduct() {

    const { productData, setProductData } = useContext(ProductContext)
    const { cartData, setCartData } = useContext(CartContext)

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const productId = urlParams.get('id')

        if (productId !== null) {
            const product = productsInThisDrop.find((product) => product.id === parseInt(productId, 10))
            setProductData(product)
        }

    }, [setProductData])

    function addToCart(product: Product) {
        const productExist = cartData.find((productInCart) => productInCart.id === product.id)

        if (productExist) {
            setCartData(
                (prevCart) =>
                    prevCart.map(
                        (item) => item.id === product.id
                            ? { ...item, amount: item.amount + 1, price: item.price * (item.amount + 1) }
                            : item
                    )
            )
        } else {
            setCartData((prevCart) => [...prevCart, { ...product, amount: 1 }])
        }
    }

    return (
        <>
            <main>

                <div className="cover-banner-white">
                    <Navbar lgColor="black" />
                </div>

                {
                    productData ? (
                        <div className="product-details flex">
                            <div className="product-details-content flex justify-center">
                                <div className="product-details-images">
                                    <div>
                                        <img
                                            className="product-image-principal"
                                            src={productData?.images[0]}
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex justify-left product-image-secondary">
                                        <img src={productData?.images[0]} alt="" />
                                        <img src={productData?.images[0]} alt="" />
                                    </div>
                                </div>

                                <div className="text-black product-details-info flex-start flex font-mono">

                                    <div>
                                        <h1>{productData?.name}</h1>
                                        <h2>R${productData?.price.toFixed(2).replace('.', ',')}</h2>
                                        <p>{productData?.description}</p>
                                        <div className="tag bg-promo">
                                            <b>A Vista no Pix</b>
                                        </div>
                                        <div className="w-75">
                                            <NavLink to="/carrinho">
                                                <Button
                                                    text="Adicionar Ao Carrinho"
                                                    function={() => addToCart(productData)}
                                                />
                                            </NavLink>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ) : (
                        <p>Nenhum Produto Selecionado</p>
                    )
                }
            </main>
        </>
    )
}