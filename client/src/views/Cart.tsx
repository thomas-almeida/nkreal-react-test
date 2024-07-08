
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import CartContext from "../components/CartContext";
import { useContext, useEffect, useState } from "react";
import { Product } from "../data/types";

export default function Cart() {

    const [totalValue, setTotalValue] = useState(Number)
    const { cartData, setCartData } = useContext(CartContext)

    function addAmount(product: Product) {
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
        }
    }

    useEffect(() => {
        setTotalValue(cartData.reduce((total, item) => total + item.price, 0))
    })

    return (
        <>
            <main>

                <div className="cover-banner-white">
                    <Navbar lgColor="black" />
                </div>

                <div className="flex m-10 font-mono cart-container">
                    <div className="cart-container-content flex">
                        <div>
                            <h1>Carrinho</h1>
                            <p className="w-50">
                                Confira os produtos adicionados, revise o
                                total e finalize sua compra
                            </p>
                            <div className="cart-items">
                                {
                                    cartData.map((cartItem) => (
                                        <li
                                            key={cartItem.id}
                                            className="flex justify-left"
                                        >
                                            <img src={cartItem.images[0]} alt="" />
                                            <div className="">
                                                <div className="flex items-center justify-left">
                                                    <h3>{cartItem.name}</h3>
                                                    <p>x{cartItem.amount}</p>
                                                </div>
                                                <h2>R${cartItem.price.toFixed(2).replace('.', ',')}</h2>
                                                <div className="flex justify-left amount-buttons">
                                                    <p onClick={() => addAmount(cartItem)}>Adicionar</p>
                                                    <p onCanPlay={() => console.log('')}>Remover</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="m-10 resume">
                            {
                                cartData.length > 0 ? (
                                    <>
                                        <h2>Finalizar Compra</h2>
                                        <h3>Total</h3>
                                        <h4>R${totalValue.toFixed(2).replace('.',',')}</h4>
                                        <b>Pagamento</b>
                                        <div className="flex space-around dual-buttons">
                                            <Button
                                                text="Cartão"
                                                function={() => console.log('aaa')}
                                            />
                                            <Button
                                                text="Pix"
                                                function={() => console.log('aaa')}
                                            />
                                        </div>
                                        <Button
                                            text="Finalizar Compra"
                                            function={() => console.log('aa')}
                                        />
                                    </>
                                ) : (
                                    <p>Nenhum Produto Adicionado</p>
                                )
                            }
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}