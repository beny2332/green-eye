const {
  createPoll,
  getPollById,
  getNotifications,
  reply,
  deletePoll,
} = require("../controllers/greenEyeController")

const router = require("express").Router()

// create a new poll
router.post("/", createPoll)

router.get("/my", getNotifications)

router.get("/:id", getPollById)

router.post("/reply", reply)

router.delete("/:id", deletePoll)

module.exports = router
