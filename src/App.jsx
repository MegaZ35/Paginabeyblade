import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Producto from "./pages/producto/Producto";
import Torneos from "./pages/torneo/Torneos";




function App() {


  return (
    <>
    
      <BrowserRouter>
        <Routes>
          
            <Route path="/home" element={<Home/>} />
            <Route path="/producto" element={<Producto/>} />
            <Route path="/torneos" element= {<Torneos/>} />
            
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App
