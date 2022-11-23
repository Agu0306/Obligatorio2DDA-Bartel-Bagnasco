import http from "../http-common";

class PlanesClienteDataService {
  getAll() {
    return http.get("/planescliente");
  }

  get(ci) {
    return http.get(`/planescliente/${ci}`);
  }

  create(data) {
    return http.post("/agregarplan", data);
  }

  delete(ci) {
    return http.delete(`/borrarplan/${ci}`);
  }
}

export default new PlanesClienteDataService();