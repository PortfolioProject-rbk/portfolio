const User = require("./model")

const jwt = require("jsonwebtoken")


module.exports = {

  createUser: async (req, res) => {
    try {
      const { username, password } = req.body
      const checkusername = await User.findOne({ where: { username: username } })
      if (checkusername) {
        res.status(400).json({ error: "username already exist " })
      }
      const user = await User.create({

        username: username,
        password: password
      }

      )

      res.status(201).json(user)
    } catch (error) {

      console.log(req.body)
      res.status(500).json(error)
    }
  },

  signin: async (req, res) => {

    try {
      const { username, password } = req.body

      const user = await User.findOne({ where: { username: username } })
      if (!user) {
        res.status(401).json("username not found ")
      }
      else if (user.password !== password) {
        res.status(401).json("incorrect password ")
      }
      else {
        const token = jwt.sign({
          userId: user.id
        },
          process.env.jwt_Secret,
          {
            expiresIn: "1d",
          }
        )

        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_', '/')
        const payload = JSON.parse(atob(base64))
        console.log(payload)
        res.status(200).json({ payload, token, message: 'succeeded' })

      }
    } catch (error) {
      res.status(400).json(error)
    }
  },

  // to test the authentication 
  getAllUsers: async (req, res) => {
    try {
      const user = await User.findAll()
      res.status(201).json(user)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}



