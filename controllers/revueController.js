const Model = require("../config/shema");

module.exports = {
    addRevue(req, res) {
        var data = req.body;
        Model.addRevue(data).then(rsp => {
            res.send(rsp);
        });
    },
    getRevues(req, res) {
        const id = req.params["id"];
        Model.getRevues(id).then(rsp => {
            res.send(rsp);
        });
    },
}