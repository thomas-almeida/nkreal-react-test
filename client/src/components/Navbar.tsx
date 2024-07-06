import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <nav>

                <img src="/logo/logo-nk-white.png" alt="" />

                <ul>
                    <li>
                        <a href="/#product">
                            Produtos
                        </a>
                    </li>
                    <li>
                        <NavLink to="/carrinho">
                            Carrinho
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}