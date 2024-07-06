import { productsInThisDrop } from "../data/products"
import Button from "./Button"

function cowsay() {
    console.log('muu')
}

export default function ProducList() {
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
                                <img
                                    src={product.images[0]}
                                    alt={product.description}
                                />
                                <h3>{product.name}</h3>
                                <div className="flex justify-left">
                                    <h4>R${product.price.toFixed(2).replace('.', ',')}</h4>
                                    <div className="tag bg-promo m-10">
                                        <p className="font-mono">A Vista no Pix</p>
                                    </div>
                                </div>
                                <Button
                                    text="Adicionar Ao Carrinho"
                                    function={() => cowsay()}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}