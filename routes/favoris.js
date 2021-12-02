const express = require("express")
const router = express.Router();
const controller = require("../controllers/favorisController")

router
    .route("/favoris/:id")
    .get(controller.getFavoris)

router
    .route("/favoris")
    .post(controller.addFavoris)

router
    .route("/favoris/:id/:idFilm")
    .get(controller.isInFavoris)


module.exports = router;