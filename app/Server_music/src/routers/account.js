const express = require("express");
var router = express.Router();
const accountController = require("../app/controllers/accountController");

router.get("/", accountController.show);
router.post("/register", accountController.register);
router.get("/loginShow", accountController.loginShow);
router.post("/login", accountController.login);
router.get("/private", accountController.private);
router.get("/pagination", accountController.pagination);
router.get("/search", accountController.searchAccount);
router.get("/:id", accountController.showId);
router.put("/:id", accountController.updateId);
router.delete("/:id", accountController.deleteAccount);

module.exports = router;
