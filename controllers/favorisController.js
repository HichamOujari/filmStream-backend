const Model = require("../config/shema");

module.exports = {
    addFavoris(req, res) {
        var data = req.body;
        Model.addFavoris(data).then(rsp => {
            res.send(rsp);
        });
    },
    getFavoris(req, res) {
        const id = req.params["id"];
        Model.getFavoris(id).then(rsp => {
            res.send(rsp);
        });
    },
    isInFavoris(req, res) {
        const id = req.params["id"];
        const idFilm = req.params["idFilm"];
        Model.isInFavoris(id,idFilm).then(rsp => {
            res.send(rsp);
        });
    },
}