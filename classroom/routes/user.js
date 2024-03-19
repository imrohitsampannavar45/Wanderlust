const express = require("express");
const router = express.Router();

// index users
router.get("/", (req, res) => {
  res.send(" GET for users");
}
)
// show users
router.get("/:id", (req, res) => {
  res.send(" GET for show users id ");
}
)
//post for usr
router.post("/", (req, res) => {
  res.send(" Post for users");
}
)
//delete for user
router.delete("/:id", (req, res) => {
  res.send(" DELETE for users id ");
}
)
module.exports = router;