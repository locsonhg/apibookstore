const authorController = require("../controllers/authorcontroller");

const router = require("express").Router();


//them tac gia
router.post("/", authorController.addauthor)
// danh sach tac gia
router.get("/", authorController.allAuthor)
// chi tiet 1 tac gia
router.get("/:id", authorController.getAnAuthor)
// sua chi tiet 1 tac gia
router.put("/:id", authorController.updateAuthor)
// xoa tac gia
router.delete("/:id", authorController.deleteAuthor)
module.exports = router;