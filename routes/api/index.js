const router = require("express").Router();
const businessRoutes = require("./business");
const userRoutes = require("./user");
const reviewRoutes = require("./review")

// api/ routes
router.use("/user", userRoutes);
router.use("/business", businessRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
