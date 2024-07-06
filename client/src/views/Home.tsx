import Navbar from "../components/Navbar"
import ProducList from "../components/ProductList"

export default function Home() {
    return (
        <>
            <main>
                <div className="cover-banner">
                    <div className="cover-banner-content">
                        <Navbar />
                        <div className="branding">
                            <h1>NK REAL CHOPPA</h1>
                            <p>"We are great because we are many, we represent a lifestyle"</p>
                        </div>
                    </div>
                </div>

                <div className="m-10 flex">
                    <h2 className="font-mono m-10">DROP DE PRODUTOS</h2>
                    <div className="tag bg-warning">
                        <p className="font-mono">Válidos Até <b>12/07/2024</b></p>
                    </div>
                </div>
                
                <div className="m-10">
                    <ProducList />
                </div>

            </main>
        </>
    )
}