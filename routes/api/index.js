const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = requrie("./google");

// Book routes
router.use("/books", bookRoutes);

router.use("/google", googleRoutes);

module.exports = router;
