const jwt = require('jsonwebtoken')
const userCollection = require('../db/mongodb/user.collection')
const userDTO = require('../apis/models/user.model')

const authMiddleware = async (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    try {
      const decoded = jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY)
      console.log("check decode:D", decoded)

      const userInfo = await userCollection.findById(decoded.id)

      if (!userInfo) {
        res.status(500).send({ message: 'Not found user' })
      } else {
        req.auth = new userDTO(userInfo)
        next()
      }
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  } else {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

module.exports = authMiddleware
