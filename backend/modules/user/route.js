const express = require ("express")
const router = express.Router()
const {createUser}=require("./controller")

router.post("/signup",createUser)






module.exports= router