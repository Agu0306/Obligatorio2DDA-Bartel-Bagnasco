import React, { useState, useEffect } from "react";
import PlanesClienteDataService from "../../services/planescliente.service";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import PlanDataService from "../../services/plan.service"

const AgregarPlanCliente = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const initialPlanState = {
        id: ""
    };

    const [planCliente, setPlanCliente] = useState(initialPlanState);
    const [planes, setPlanes] = useState([]);
    const [currentPlan, setCurrentPlan] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchPlan, setSearchPlan] = useState("");

    useEffect(() => {
        retrievePlanes();
    }, []);

    const retrievePlanes = () => {
        PlanDataService.getAll().then(response => {
            setPlanes(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    };

    const buscarPlan = (e) => {
        if (e.target.value === "") {
            try {
                PlanDataService.getAll().then(response => {
                    setPlanes(response.data)
                });
            } catch (e) {
                console.log(e);
            }
        }
        const searchResult = planes.filter(plan => plan.destino.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchPlan(e.target.value);
        setPlanes(searchResult);
    }

    const savePlanCliente = () => {
        var data = {
            id: currentPlan.id
        };

        PlanesClienteDataService.create(data, id).then(response => {
            setPlanCliente({
                id: response.data.id
            });
            console.log(response.data);
        })

        navigate("/planescliente/" + id);
    }

    const setActivePlan = (plan, index) => {
        setCurrentPlan(plan);
        setCurrentIndex(index);
    }

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por destino"
                        value={searchPlan}
                        onChange={buscarPlan}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <h4>Comprar viaje para {id}</h4>
                <Link to={"/agregarplan"} className="btn btn-success" style={{ marginTop: "1%", marginBottom: "1%" }}>
                    Agregar nuevo
                </Link>

                <ul className="list-group">
                    {planes && planes.map((plan, index) => (
                        <li
                            className={
                                "list-group-item" +
                                (index === currentIndex ? " active" : "")
                            }
                            onClick={() => setActivePlan(plan, index)}
                            key={index}
                            style={{ cursor: "pointer" }}>
                            {plan.destino} <strong>U$S</strong>{plan.precio}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-md-6">
                <br></br>
                {currentPlan ? (
                    <div style={{ border: '1px solid #C7C8C9', padding: '5px', borderRadius: '1%' }}>
                        <h4 style={{ margin: "1%" }}>{currentPlan.destino}</h4>
                        <div style={{ margin: "1%" }}>
                            <label>
                                <strong>Modalidad:</strong>
                            </label>{" "}
                            {currentPlan.modalidad}
                        </div>
                        <div style={{ margin: "1%" }}>
                            <label>
                                <strong>Fecha:</strong>
                            </label>{" "}
                            {currentPlan.fecha}
                        </div>
                        <div style={{ margin: "1%" }}>
                            <label>
                                <strong>Precio:</strong>
                            </label>{" "}
                            U$S{currentPlan.precio}
                        </div>

                        <button
                            className="btn btn-success"
                            onClick={savePlanCliente}
                            style={{ margin: "1%" }}>
                            Comprar
                        </button>
                    </div>
                ) : (
                    <div>
                        <h4>Seleccione un plan</h4>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AgregarPlanCliente;