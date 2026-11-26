/*import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Acceuil from "./components/Acceuil/Acceuil";
function App() {
  return( 
  <div className="app"> 
    <section className="conteneur-accueil">
    <div className="accueil">
      <Navbar/>
      <Accueil/>
    </div>
  </section>
  </div> 
  );
}

export default App;
*/ 
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Accueil from "./components/Accueil/Accueil";
import Presence from "./Pages/presence";
import Programme from "./Pages/programme";
import Consultation from "./Pages/consultation";
import Demandes from "./Pages/demandes";
import Notifications from "./Pages/notifications";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <section className="conteneur-accueil">
          <div className="accueil">
            <Navbar />
            <Accueil />
            <Routes>
              <Route path="/accueil" element={<Accueil />} />
              <Route path="/presence" element={<Presence />} />
              <Route path="/programme" element={<Programme />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/demandes" element={<Demandes />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
