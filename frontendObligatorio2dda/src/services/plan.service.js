import http from "../http-common";

class PlanDataService {
  getAll() {
    return http.get("/planes");
  }

  get(id) {
    return http.get(`/planes/${id}`);
  }

  create(data) {
    return http.post("/agregarplan", data);
  }

  update(id, data) {
    return http.put(`/modificarplan/${id}`, data);
  }

  delete(id, data) {
    return http.delete(`/borrarplan/${id}`);
  }

  updatePlanEliminado(id, data){
    return http.put(`/modificarplaneliminado/${id}`, data);
  }
}

export default new PlanDataService();