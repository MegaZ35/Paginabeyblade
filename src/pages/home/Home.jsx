import imagenes from "../../assets/imagenes"
import Footer from "../../components/commons/Footer/Footer"
import Header from "../../components/commons/Header/Header"




function Home() {


    return (
        <>
            <Header/>
            <div homeimage>
            <img src={imagenes['img1']}  />
            </div>
            <h2>Esto es una página full Beyblade. Gracias al exito de Bakuten, Metal y Burst, a llegado al nueva generación Beyblade X con un nuevo sistema que intenta revolucionar al mundo.</h2>
            <h2>Intenta ser un deporte que se pueda jugar en todo el mundo a diferencia de lo anteriormente visto en las anteriores generaciones.</h2>
            <Footer />

        </>
    )
}

export default Home 