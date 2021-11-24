const express = require("express")
const router = express.Router();
const controller = require("../controllers/movieController")

router
    .route("/:id")
    .get(controller.getFilmbyId)
    .put(controller.updateFilmById)
    .delete(controller.deleteFilmbyId)

router
    .route("")
    .post(controller.getAllFilms)


module.exports = router;