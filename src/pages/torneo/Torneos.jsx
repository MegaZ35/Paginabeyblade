import imagenes from "../../assets/imagenes";
import Footer from "../../components/commons/Footer/Footer";
import Header from "../../components/commons/Header/Header";
import './torneos.css';

function Torneos() {
    return (
        <>
            <Header />

            <h2>Se podrá poder ver los torneos que se harán en España, Estados Unidos y SurAmerica</h2>
            <h2>Se pogramarán un día especifico y un contador para ver cuando falta para que se pueda ver X Torneo que quieras ver</h2>

            <div className="image-container">   
                <img src={imagenes['img4']} alt='Imagen 1' className='imagen' />
            </div>

            <Footer />

        </>
    )

}

export default Torneos