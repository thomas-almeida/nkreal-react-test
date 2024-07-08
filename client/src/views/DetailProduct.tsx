import Button from "../components/Button"
import Navbar from "../components/Navbar"
import ProductContext from "../components/ProductContext"
import { useContext } from "react"

export default function DetailProduct() {

    const { productData } = useContext(ProductContext)

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
                                            src={productData.images[0]}
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex justify-left product-image-secondary">
                                        <img src={productData.images[0]} alt="" />
                                        <img src={productData.images[0]} alt="" />
                                    </div>
                                </div>

                                <div className="text-black product-details-info flex-start flex font-mono">

                                    <div>
                                        <h1>{productData.name}</h1>
                                        <h2>{productData.price}</h2>
                                        <p>{productData.description}</p>
                                        <div className="tag bg-promo">
                                            <b>A Vista no Pix</b>
                                        </div>
                                        <div className="w-75">
                                            <Button
                                                text="Adicionar ao Carrinho"
                                                function={() => console.log('aaa')}
                                            />
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