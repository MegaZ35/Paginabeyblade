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

            <h2>Tornero Master Cup es para persona de 8 - 14 años, </h2>
            <h2>La competición se llavara acabo en uno de los paises como en España, America, Japón etc..., los ganadores de los torneos iran al mundial</h2>
            <h2>Y comperian por ser el mejor</h2>
            <h2>Lo mismo para senior que es apartir de 15 años los ganadores de los torneos iran al mundial Y competiran por ser el mejor</h2>

            
            <div className="image-container">   
                <img src={imagenes['img12']} alt='Imagen 2' className='imagen' />
            </div>


            <Footer />

        </>
    )

}

export default Torneos