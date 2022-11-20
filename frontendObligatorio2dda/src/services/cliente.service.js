import http from "../http-common";

class ClienteDataService {
  getAll() {
    return http.get("/clientes");
  }

  get(id) {
    return http.get(`/cliente/${id}`);
  }

  create(data) {
    return http.post("/agregarcliente", data);
  }

  update(id, data) {
    return http.put(`/modificarcliente/${id}`, data);
  }

  delete(id) {
    return http.delete(`/borrarcliente/${id}`);
  }

  findByCI(ci) {
    return http.get(`/clientes?ci=${ci}`);
  }
}

export default new ClienteDataService;