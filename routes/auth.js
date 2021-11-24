const express = require("express")
const router = express.Router();
const controller = require("../controllers/authController")

router
    .route("/signup")
    .post(controller.signup)


router
    .route("/signin")
    .post(controller.signin)

router
    .route("/:id")
    .get(controller.getUserById)
    .put(controller.updateUser)
    .delete(controller.deleteUser)

module.exports = router;