import React, { Component } from "react";
import {Link, Routes, Route} from "react-router-dom";
import AgregarCliente from "./AgregarCliente";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/clientes" className="navbar-brand">
            Obligatorio
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/clientes"} className="nav-link">
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/agregarcliente"} className="nav-link">
                Agregar
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={"#"} />
            <Route path="/listaclientes" element={"#"} />
            <Route path="/agregarcliente" element={<AgregarCliente/>} />
            <Route path="/borrarcliente/:id" element={"#"} />
            <Route path="/modificarcliente/:id" element={"#"} />
            <Route path="/cliente/:id" element={"#"} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;