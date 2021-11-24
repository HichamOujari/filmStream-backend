const Model = require("../config/shema");

module.exports = {
    signin(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        Model.signin(email, password).then(rsp => {
            res.send(rsp);
        });
    },
    signup(req, res) {
        var email = req.body.email;
        var password = req.body.password;

        Model.signup(email, password).then(rsp => {
            res.send(rsp);
        });
    },
    deleteUser(req, res) {

    },
    updateUser(req, res) {

    },
    getUserById(req, res) {

    },
}