const { getEmployees,createEmployee, getSingleEmployees, deleteEmployees, updateEmployees } = require("../controller")
const { login, loginRequired } = require("../middleware/auth")

const routes = (app) => {
    app.route("/api")
    .get(loginRequired,getEmployees)
    .post(loginRequired,createEmployee)

    app.route("/api/:id")
    .get(loginRequired,getSingleEmployees)
    .put(loginRequired,updateEmployees)
    .delete(loginRequired,deleteEmployees)

    app.route("/login")
       .post(login)

    app.route("/register")
        .post(createEmployee)


}

module.exports = routes