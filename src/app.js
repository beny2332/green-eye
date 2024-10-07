const exp = require("express")
const dotenv = require("dotenv")
const { connectToMongo } = require("./config/dbConfig")

const app = exp()
dotenv.config()
const port = process.env.PORT || 1415
connectToMongo()

app.use(exp.json())
app.use('/auth', require('./routes/authRouter'))
app.use('/user', require('./routes/userRouter'))
app.use('/greenEye', require('./routes/greenEyeRouter'))

app.listen(port, () => console.log("Server is up and runing on port: " + port))
