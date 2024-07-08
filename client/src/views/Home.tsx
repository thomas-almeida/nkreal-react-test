import Navbar from "../components/Navbar"
import ProducList from "../components/ProductList"

export default function Home() {
    return (
        <>
            <main>
                <div className="cover-banner">
                    <div className="cover-banner-content">
                        <Navbar lgColor="white" />
                        <div className="branding">
                            <h1>NK REAL CHOPPA</h1>
                            <p>"We are great because we are many, we represent a lifestyle"</p>
                        </div>
                    </div>
                </div>

                <div className="m-10 flex">
                    <h2 className="font-mono m-10">DROP DE PRODUTOS</h2>
                </div>

                <div className="m-10 my-20">
                    <ProducList />
                </div>


            </main>
        </>
    )
}