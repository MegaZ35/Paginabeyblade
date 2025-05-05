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
            <h2>The competition will be held in one of the countries such as Spain, America, Japan, etc., the winners of the tournaments will go to the World Cup.</h2>
            <h2>And they compete to be the best</h2>
            <h2>The same for seniors, who are 15 years old and up, the winners of the tournaments will go to the World Cup and compete to be the best.</h2>

            
            <div className="image-container">   
                <img src={imagenes['img12']} alt='Imagen 2' className='imagen' />
            </div>


            <Footer />

        </>
    )

}

export default Torneos