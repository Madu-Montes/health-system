const prisma = require('../config/prisma')
const bcrypt = require('bcrypt')

async function registerUser({ name, email, password }) {

  const userExists = await prisma.user.findUnique({
    where: { email }
  })

  if (userExists) {
    throw new Error('User already exists')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  return user
}

module.exports = {
  registerUser
}
