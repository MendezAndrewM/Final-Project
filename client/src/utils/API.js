import axios from "axios";

export default {
//   user shit
  getUsers: function() {
    return axios.get("/api/user");
  },
  
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
// business shit
  getBusinesses: function() {
    return axios.get("/api/business");
  },
  
  getBusiness: function(id) {
    return axios.get("/api/business/" + id);
  },
  deleteBusiness: function(id) {
    return axios.delete("/api/business/" + id);
  },
  
  saveBusiness: function(businessData) {
    return axios.post("/api/business", businessData);
  },

};