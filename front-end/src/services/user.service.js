import http from "../http-common"

class UserDataService {
  get() {
    return http.get("/logged_in");
  }
  postUser(data) {
    return http.post("/sessions",data);
  }
  getAll() {
    return http.get("/users");
  }
  logout() {
    return http.delete("/logout");
  }
  update(id,data) {
    return http.put("/users/"+id,data);
  }
  signup(data) {
    return http.post("/registrations",data)
  }
}

export default new UserDataService();
