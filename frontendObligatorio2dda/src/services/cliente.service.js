import http from "../http-common";

class ClienteDataService {
  getAll() {
    return http.get("/clientes");
  }

  get(ci) {
    return http.get(`/clientes/${ci}`);
  }

  create(data) {
    return http.post("/agregarcliente", data);
  }

  update(ci, data) {
    return http.put(`/modificarcliente/${ci}`, data);
  }

  delete(ci) {
    return http.delete(`/borrarcliente/${ci}`);
  }
}

export default new ClienteDataService();