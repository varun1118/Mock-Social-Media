  
const { Router } = require('express')
const {
  commentOfPost,createNewComment
} = require('../../controllers/comments')
const { Users } = require('../../db/models')

const route = Router()

route.get('/:id', async (req, res) => {
  const comments = await commentOfPost(req.params.id)
  res.status(200).send(comments)
})

route.post('/', async (req, res) => {
  const { userId, title, body, postId} = req.body
  
  if ((!userId) || (!title) || (!postId)) {
    return res.status(400).send({
      error: 'Need userid, title and body to create post'
    })
  }

  const comment = await createNewComment(userId, title, body,postId)
  res.status(201).send(comment)
})


module.exports = {
commentsRoute: route
}