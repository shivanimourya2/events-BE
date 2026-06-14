const express = require("express");
const bookingController = require("../controllers/bookingController");


let router = express.Router();

router.post("/add", bookingController.addController);
router.get("/get", bookingController.getAllController);
router.put("/update/:id", bookingController.updateController);
router.delete("/delete/:id",bookingController.deleteController);

module.exports = router;
