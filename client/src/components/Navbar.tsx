import { NavLink } from "react-router-dom"

export default function Navbar(props: { lgColor: string }) {

    const colorStyle = props.lgColor === "white" ? "text-white" : "text-black"

    return (
        <>
            <nav>

                <NavLink to="/">
                    <img
                        src={
                            props.lgColor === "white"
                                ? "logo/logo-nk-white.png"
                                : "logo/logo-nk-black.png"
                        }
                        alt=""
                    />
                </NavLink>

                <ul>
                    <li>
                        <a
                            href="/#product"
                            className={colorStyle}
                        >
                            Produtos
                        </a>
                    </li>
                    <li>
                        <NavLink
                            to="/carrinho"
                            className={colorStyle}
                        >
                            Carrinho
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}