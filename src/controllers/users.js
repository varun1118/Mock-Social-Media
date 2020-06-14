const { Users } = require('../db/models')
const { genRandomUsername } = require('../utils/username')

async function createAnonUser() {
  const user = await Users.create({
    username: genRandomUsername(),
  })

  return user
}

async function getUserById(id) {
  return await Users.findOne({ where: { id } })
}

async function getUserByUsername(username) {
  return await Users.findOne({ where: { username } })
}

async function findAllUsers(query) {
    // TODO: Handle query params
    const users = await Users.findAll()
  
    return users
  }
module.exports = {
  createAnonUser,
  getUserById,
  getUserByUsername,
  findAllUsers
}

/*  Test Code */
/*
async function task () {
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
}
task() 
*/