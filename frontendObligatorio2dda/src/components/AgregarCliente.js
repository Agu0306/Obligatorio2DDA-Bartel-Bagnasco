import React, { Component } from "react";
import ClienteDataService from "../services/cliente.service";

export default class AgregarCliente extends Component {
    constructor(props) {
        super(props);
        this.onChangeCI = this.onChangeCI.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeApellido = this.onChangeApellido.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.saveCliente = this.saveCliente.bind(this);
        this.newCliente = this.newCliente.bind(this);

        this.state = {
            id: null,
            ci: "",
            apellido: "",
            email: "",
            nombre: "",
            submitted: false
        };
    }

    onChangeCI(e) {
        this.setState({
            ci: e.target.value
        });
    }

    onChangeNombre(e) {
        this.setState({
            nombre: e.target.value
        });
    }

    onChangeApellido(e) {
        this.setState({
            apellido: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    saveCliente() {
        const headers = {
            'Content-Type': 'text/plain'
        };

        var data = {
            ci: this.state.ci,
            apellido: this.state.apellido,
            email: this.state.email,
            nombre: this.state.nombre
        };

        ClienteDataService.create(data).then(response => {
            this.setState({
                id: response.data.id,
                ci: response.data.ci,
                apellido: response.data.apellido,
                email: response.data.email,
                nombre: response.data.nombre,
                submitted: true
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e.response.data);
            });
    }

    newCliente() {
        this.setState({
            id: null,
            ci: "",
            apellido: "",
            email: "",
            nombre: "",
            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Agregado correctamente</h4>
                        <button className="btn btn-success" onClick={this.newCliente}>
                            Nuevo
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="ci">Cédula</label>
                            <input
                                type="number"
                                className="form-control"
                                id="ci"
                                required
                                value={this.state.ci}
                                onChange={this.onChangeCI}
                                name="ci"
                            />

                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                required
                                value={this.state.nombre}
                                onChange={this.onChangeNombre}
                                name="nombre"
                            />

                            <label htmlFor="apellido">Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                id="apellido"
                                required
                                value={this.state.apellido}
                                onChange={this.onChangeApellido}
                                name="apellido"
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                required
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                name="email"
                            />
                        </div>

                        <button onClick={this.saveCliente} className="btn btn-success">
                            Agregar
                        </button>
                    </div>
                )}
            </div>
        )
    }
}