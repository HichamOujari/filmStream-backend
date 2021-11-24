const data = require("../data")

module.exports = {
    getFilmbyId(req, res) {
        const id = req.params["id"];
        var isExist = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i]["id"] == id) {
                isExist = true;
                res.send({
                    err: false,
                    msg: "done!",
                    data: data[i]
                });
            }
        }
        if (!isExist) res.send({
            err: true,
            msg: "not found"
        });
    },
    getAllFilms(req, res) {
        console.log(req.body);
        res.send("done!");
    },
    updateFilmById(req, res) {
        res.send("updateFilmById film")
    },
    deleteFilmbyId(req, res) {
        res.send("delete film")
    }

}