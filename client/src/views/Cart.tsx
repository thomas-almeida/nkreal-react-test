
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import CartContext from "../components/CartContext";
import { useContext } from "react";

export default function Cart() {

    const { cartData } = useContext(CartContext)



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
                                                <h4>R${cartItem.price.toFixed(2).replace('.', ',')}</h4>
                                            </div>
                                        </li>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="m-10">
                            <h2>Finalizar Compra</h2>
                            <h3>Total</h3>
                            <h4>R$ 119,90</h4>
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
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}