const { Users } = require('../../db/models')  
const { Router } = require('express')
const {
  findAllPosts,
  createNewPost,
  findPostByUId,
} = require('../../controllers/posts')
const route = Router()

route.get('/', async (req, res) => {
  const posts = await findAllPosts()
  res.status(200).send(posts)
})

route.get('/:id', async(req,res)=>{
    const posts = await findPostByUId(req.params.id)
    res.status(200).send(posts)
})

route.post('/:name', async(req,res)=>{
  const user = await Users.findOne({ where: { username:req.params.name } })
  if(user){
    const posts = await findPostByUId(user.id)
    res.status(200).send(posts)
  }
  else if(!user){
    res.send('varun')
  }
})
route.post('/', async (req, res) => {
  const { userId, title, body } = req.body
  
  if ((!userId) || (!title) || (!body)) {
    return res.status(400).send({
      error: 'Need userid, title and body to create post'
    })
  }

  const post = await createNewPost(userId, title, body)
  res.status(201).send(post)
})


module.exports = {
  postsRoute: route
}