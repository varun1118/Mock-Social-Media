function loadSinglePost() {
    $.get('/api/posts', (posts) => {
      for (let p of posts) {
          if(p.id==window.localStorage.postid){
            $('#posts-container').append(
                $(`
                <div class="col-4 mx-auto">
                  <div class="card m-2">
                    <div class="card-body">
                      <h5 class="card-title">${p.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                      <p class="card-text">
                        ${p.body} 
                      </p>
                      <a href="#" class="card-link" onClick=myFunc(${p.id})>Comment</a>
                    </div>
                  </div>
                </div>
                  `))
      }     
      }
    })
  }
  function loadComments(){
      $.get(`/api/comments/${window.localStorage.postid}`,(comments)=>{
          if(comments==""){
            $('#posts-comment').append(
                $(`<h5>No Comments Till now</h5>
                `))
          }
          else{
            for (let p of comments) {
                if(p.body==null){
                    $('#posts-comment').append(
                        $(`
                        <div class="col-4">
                          <div class="card m-2">
                            <div class="card-body">
                              <h5 class="card-title">${p.title}</h5>
                              <h6 class="card-subtitle mb-2 text-muted"><b><i>by:</b></i>${p.user.username}</h6>
                            </div>
                          </div>
                        </div>
                          `))
                }
                else{
                    $('#posts-comment').append(
                        $(`
                        <div class="col-4">
                          <div class="card m-2">
                            <div class="card-body">
                              <h5 class="card-title">${p.title}</h5>
                              <h6 class="card-subtitle mb-2 text-muted"><b><i>by:</b></i>${p.user.username}</h6>
                              <p class="card-text">
                                ${p.body}
                              </p>
                            </div>
                          </div>
                        </div>
                          `))
                }
      }}})
  }
  
  function myFunc(x){
    console.log(x)
     let commentUrl = `/components/comment.html`
               //console.log(commentUrl)
               $('#content').load(commentUrl) 
               window.localStorage.postId=JSON.stringify(x)
  }