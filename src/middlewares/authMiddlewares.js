const jwt = require("jsonwebtoken")

const onlyCommanders = async (req, res, next) => {
    try {
         // get the token from cookie
         const token = req.cookies.token

         // verify
         const userData = await jwt.verify(token, process.env.TOKEN_SECRET)
         if (userData.role !== "commander") {
           return res.status(403).send("Know your place soldier!! you are not a commander yet...")
         }
         // add the user to the req obj
         req.user = userData
         // call next
         next()
    } catch (err) {
        console.log(err)
        res.status(401).send(err.message)
    }
}

const onlySoldiersAndCommanders = async (req, res, next) => {
    try {
        // get the token from cookie
        const token = req.cookies.token

        // verify
        const userData = await jwt.verify(token, process.env.TOKEN_SECRET)
        // add the user to the req obj
        req.user = userData
        // call next
        next()
    } catch (err) {
        console.log(err)
        res.status(401).send(err.message)
    }
}

module.exports = {
    onlyCommanders,
    onlySoldiersAndCommanders
}
