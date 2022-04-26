import "./App.css";
/******* Modules ******************/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import configAxios from "./axios/configAxios";
import ChiensContext from "./context/ChiensContext";

/******** Components *************/
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Association from "./components/pages/Association";
/********** Chiens ***************/
import ChiensFrance from "./components/pages/chiens/ChiensFrance";
import ChiensEspagne from "./components/pages/chiens/ChiensEspagne";

function App() {
  const [chiens, setChiens] = useState([]);
  //Récupération de tous les chiens

  useEffect(() => {
    configAxios
      .get(`chiens`)
      .then((response) => response.data)
      .then((data) => setChiens(data));
  }, []);
  return (
    <div className="App">
      <Router>
        <Header className="App-header" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/association" element={<Association />} />
          <Route
            path="/chiens/france"
            element={
              <ChiensContext.Provider
                value={{ chiens: chiens, setChiens: setChiens }}
              >
                <ChiensFrance />
              </ChiensContext.Provider>
            }
          ></Route>
          <Route path="/chiens/espagne" element={<ChiensEspagne />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
