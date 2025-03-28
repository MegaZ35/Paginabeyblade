import './Producto.css';
import Footer from "../../components/commons/Footer/Footer";
import Header from "../../components/commons/Header/Header";
import imagenes from '../../assets/imagenes';




function Producto() {
  return (
    <>
      {<Header />}

      <div className="producto-images-container">
        <div className="producto-image-container">
          <div className="producto-overlay-text">SWORD DRAN</div>
          <img src={imagenes["img2"]} alt="Imagen 1" className="producto-image" />
        </div>
        <div className="producto-image-container">
          <div className="producto-overlay-text">HELLSCYTHE</div>
          <img src={imagenes["img3"]} alt="Imagen 2" className="producto-image" />
        </div>
        <div className="producto-image-container">
          <div className="producto-overlay-text">HELM KNIGHT</div>
          <img src={imagenes["img5"]} alt="Imagen 3" className="producto-image" />
        </div>
        <div className="producto-image-container">
          <div className="producto-overlay-text">Crimson Garuda</div>
          <img src={imagenes["img6"]} alt="Imagen 4" className="producto-image" />
          </div>
          <div className="producto-image-container">
          <div className="producto-overlay-text">Arrancador Phoenix Sour</div>
          <img src={imagenes["img7"]} alt="Imagen 5" className="producto-image" />
          </div>
          <div className="producto-image-container">
          <div className="producto-overlay-text">Cobalt Drake</div>
          <img src={imagenes["img8"]} alt="Imagen 6" className="producto-image" />
          </div>
          <div className="producto-image-container">
          <div className="producto-overlay-text">Megatron</div>
          <img src={imagenes["img9"]} alt="Imagen 7" className="producto-image" />
          </div>
          <div className="producto-image-container">
          <div className="producto-overlay-text">Lanzador Takara </div>
          <img src={imagenes["img10"]} alt="Imagen 8" className="producto-image" />
          </div>
          <div className="producto-image-container">
          <div className="producto-overlay-text">Lanzador Hasbro </div>
          <img src={imagenes["img11"]} alt="Imagen 9" className="producto-image" />
          </div>
      </div>



      {<Footer />}
    </>


  )

}






export default Producto