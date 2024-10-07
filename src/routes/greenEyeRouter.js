const {
  createPoll,
  getPollById,
  getNotifications,
  reply,
  deletePoll,
} = require("../controllers/greenEyeController")
const { onlyCommanders, onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares")

const router = require("express").Router()

// create a new poll
router.post("/", onlyCommanders, createPoll)

router.get("/my",onlySoldiersAndCommanders, getNotifications)

router.get("/:id",onlyCommanders, getPollById)

router.post("/reply",onlySoldiersAndCommanders, reply)

router.delete("/:id",onlyCommanders, deletePoll)

module.exports = router
