const { register, setSettings, getProfile } = require("../controllers/userController")

const router = require("express").Router()

router.post("/register", register)

router.get("/profile", getProfile)

router.patch("/settings", setSettings)

module.exports = router
