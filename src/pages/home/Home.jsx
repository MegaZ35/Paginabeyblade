import imagenes from "../../assets/imagenes"
import Footer from "../../components/commons/Footer/Footer"
import Header from "../../components/commons/Header/Header"




function Home() {


    return (
        <>
            <Header/>
            <div className="homeimage">
            <img src={imagenes['img1']}  />
            </div>
            <h2>This is a full Beyblade page. Thanks to the success of Bakuten, Metal, and Burst, the next generation of Beyblade X has arrived with a new system that aims to revolutionize the world.</h2>
            <h2>It aims to be a sport that can be played all over the world, unlike what was previously seen in previous generations.</h2>
            <Footer />

        </>
    )
}

export default Home 