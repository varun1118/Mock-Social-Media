const { Posts, Users, Comments } = require('../db/models')

async function createNewComment(userId, title, body, postId) {
  const comment = await Comments.create({
    title,
    body,
    userId,
    postId
  })

  return comment
}

/**
 * showAllPosts({username: ''})
 * showAllPosts({title: ''})
 */
async function commentOfPost( id ){
    const postComments = await Comments.findAll({
        where : { postId : id},
        include : [ Users, Posts]
        
    })

    return postComments
}
module.exports = {
    createNewComment,
    commentOfPost
  }