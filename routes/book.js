const bookController = require("../controllers/bookcontroller");
const { route } = require("./author");

const router = require("express").Router();


// them sach
router.post("/", bookController.addBook)
// danh sach book
router.get("/", bookController.listBook)
// chi tiet 1 quyen sach 
router.get("/:id", bookController.getAnBook)
// sua 1 quyen sach
router.put("/:id", bookController.updateBook)
// xoa 1 quyen sach
router.delete("/:id", bookController.deleteBook)
module.exports = router;