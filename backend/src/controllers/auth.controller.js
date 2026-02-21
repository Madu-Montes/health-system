const authService = require('../services/auth.service')

async function register(req, res) {
  try {

    const user = await authService.registerUser(req.body)

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email
    })

  } catch (error) {
    return res.status(400).json({
      error: error.message
    })
  }
}

module.exports = {
  register
}
