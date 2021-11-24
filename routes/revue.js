const express = require("express")
const router = express.Router();
const controller = require("../controllers/revueController")

router
    .route("/revues/:id")
    .get(controller.getRevues)

router
    .route("/revues")
    .post(controller.addRevue)


module.exports = router;