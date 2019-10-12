const router = require("express").Router();
const businessRoutes = require("./business");
const userRoutes = require("./user");

// Book routes
router.use("/user", userRoutes);
router.use("/business", businessRoutes);

module.exports = router;