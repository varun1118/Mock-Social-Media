function loadPosts() {
    $.get('/api/posts', (posts) => {
      for (let p of posts) { 
        $('#posts-container').append(
          $(`
          <div class="col-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                <p class="card-text">
                  ${p.body.substr(0,200)} 
                  <span class="more_text" style="display:none;"> ${p.body.substr(200,p.body.length)}</span>
                </p>
                <pre>
                <a href="#" class="read_more" onClick=myPost(${p.id})>Read more</a>
                <a href="#" class="card-link" onClick=myFunc(${p.id})>Comment</a>
                </pre>
              </div>
            </div>
          </div>
            `
            
          ))
      }
    })
   
  }
  function myPost(y){
    let postUrl=`/components/single-post.html`
              $('#content').load(postUrl)
              window.localStorage.postid=JSON.stringify(y)
  }
  
  function myFunc(x){
    console.log(x)
     let commentUrl = `/components/comment.html`
               //console.log(commentUrl)
               $('#content').load(commentUrl) 
               window.localStorage.postId=JSON.stringify(x)
  }