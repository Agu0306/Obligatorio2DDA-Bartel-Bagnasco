import http from "../http-common";

class PlanesClienteDataService {
  getAll() {
    return http.get("/planescliente");
  }

  get(ci) {
    return http.get(`/planescliente/${ci}`);
  }

  create(data, ci) {
    return http.post(`/planescliente/${ci}/agregar`, data);
  }

  delete(ci, data) {
    return http.delete(`/planescliente/${ci}/borrar`, { data });
  }
}

export default new PlanesClienteDataService();