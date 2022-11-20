import React, { Component } from "react";
import ClienteDataService from "../services/cliente.service";
import { Link } from "react-router-dom";

export default class ListaClientes extends Component {
    constructor(props) {
        super(props);
        this.onChangeBuscarCI = this.onChangeBuscarCI.bind(this);
        this.retrieveCliente = this.retrieveClientes.bind(this);
        this.refreshLista = this.refreshLista.bind(this);
        this.buscarCI = this.buscarCI.bind(this);

        this.state = {
            clientes: [],
            currentCliente: null,
            currentIndex: -1,
            buscarCI: ""
        };
    }

    componentDidMount() {
        this.retrieveClientes();
    }

    onChangeBuscarCI(e) {
        const busqueda = e.target.value;

        this.setState({
            buscarCI: busqueda
        });
    }

    retrieveClientes() {
        ClienteDataService.getAll().then(response => {
            this.setState({
                clientes: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            })
    }

    refreshLista() {
        this.retrieveCliente();
        this.setState({
            currentCliente: null,
            currentIndex: -1
        });
    }

    setActiveCliente(cliente, index) {
        this.setState({
            currentCliente: cliente,
            currentIndex: index
        });
    }

    buscarCI() {
        ClienteDataService.get(this.state.buscarCI).then(response => {
            this.setState({
                currentCliente: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { buscarCI, clientes, currentCliente, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar"
                            value={buscarCI}
                            onChange={this.onChangeBuscarCI}
                        />

                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.buscarCI}
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Lista de Clientes</h4>

                    <ul className="list-group">
                        {clientes && clientes.map((cliente, index) => (
                            <li
                                className={
                                    "list-group-item" +
                                    (index === currentIndex ? " active" : "")
                                }
                                onClick={() => this.setActiveCliente(cliente, index)}
                                key={index}>
                                {cliente.nombre} {cliente.apellido}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentCliente ? (
                        <div>
                            <h4>Cliente</h4>
                            <div>
                                <label>
                                    <strong>Cédula:</strong>
                                </label>{" "}
                                {currentCliente.ci}
                            </div>
                            <div>
                                <label>
                                    <strong>Nombre:</strong>
                                </label>{" "}
                                {currentCliente.nombre}
                            </div>
                            <div>
                                <label>
                                    <strong>Apellido:</strong>
                                </label>{" "}
                                {currentCliente.apellido}
                            </div>
                            <div>
                                <label>
                                    <strong>Email:</strong>
                                </label>{" "}
                                {currentCliente.email}
                            </div>

                            <div className="btn btn-warning">
                            <Link
                            to={"/clientes/" + currentCliente.ci}>
                                Editar
                            </Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <br></br>
                            <p>Haga click en un cliente</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}