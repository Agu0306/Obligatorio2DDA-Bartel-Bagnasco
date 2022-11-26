import http from "../http-common";

class ClienteDataService {
  getAll() {
    return http.get("/clientes");
  }

  getAllClienteEstandar() {
    return http.get("/clientesestandar");
  }

  getAllClientePremium() {
    return http.get("/clientespremium");
  }

  get(id) {
    return http.get(`/clientes/${id}`);
  }

  createClienteEstandar(data) {
    return http.post("/agregarclienteestandar", data);
  }

  createClientePremium(data) {
    return http.post("/agregarclientepremium", data);
  }

  updateClienteEstandar(id, data) {
    return http.put(`/modificarclienteestandar/${id}`, data);
  }

  updateClientePremium(id, data) {
    return http.put(`/modificarclientepremium/${id}`, data);
  }

  deleteClienteEstandar(id) {
    return http.delete(`/borrarclienteestandar/${id}`);
  }

  deleteClientePremium(id) {
    return http.delete(`/borrarclientepremium/${id}`);
  }

  delete(id){
    return http.delete(`/borrarcliente/${id}`);
  }
}

export default new ClienteDataService();