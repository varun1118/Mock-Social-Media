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
                  `
                ))
          }
      }
    })
   
  }