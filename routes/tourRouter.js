const express = require('express');
const tourController = require("../controllers/tourController");

const router = express.Router();

router.param('id', tourController.checkID);

router.route("/")
    .get(tourController.getAllTour)
    .post(tourController.createNewTour);

router.route("/:id")
    .get(tourController.getSingleTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);


module.exports = router