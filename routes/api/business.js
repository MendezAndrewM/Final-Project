const router = require("express").Router();
const businessController = require("../../controllers/businessController");
const reviewController = require("../../controllers/reviewController");

// Matches with "/api/business"
router
  .route("/")
  .get(businessController.findAll)
  .post(businessController.create);

// Matches with "/api/business/:id"
router
  .route("/:id")
  .get(businessController.findById)
  .put(businessController.update)
  .delete(businessController.remove);

router
  .route(":id/review")
  .get(reviewController.findForBusiness)

module.exports = router;
