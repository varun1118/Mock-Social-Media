
$('#btn-id').click(()=>{
    $('#id').css('display','inline-block')
    $('#id').css('margin-top','20px')
    $('#user').css('display','none')
    $('#user').val("")
    $('#search').css('display','inline-block')
  })
  $('#btn-user').click(()=>{
    $('#user').css('display','inline-block')
    $('#id').css('display','none')
    $('#user').css('margin-bottom','20px')
    $('#id').val("")
    $('#search').css('display','inline-block')
  }
  )
  
  $('#search').click(()=>{
    emptypost()
    if(($('#id').val()==="")&&($('#user').val()==="")){
      return window.alert('Need to Select atleast one button')
    }
    if(($('#user').val()==="")){
      loadPostsViaId()
    }
    else{
      loadPostViaName()
    }
  })
  
  function emptypost(){
    $('.col-4').remove();
  }
  function loadPostViaName(){
    $.post(`/api/posts/${$('#user').val()}`, (posts) => {
      if(posts==('varun')){
        return window.alert('Such Username does not Exist')
      }
      for (let p of posts) {
        {
          $('#posts-container').append(
            $(`
            <div  class="col-4">
              <div class="card m-2">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                  <p class="card-text">
                    ${p.body.substr(0, 200)}<span id="dots">...</span><span id="more" style="display: none;">${p.body.substr(200, p.body.length)}</span>
                  </p>
                  <pre>
                  <a href="#ex1" onclick=myPost(${p.id})>Read More</a>
                  <a href="#"  class="card-link" onClick=myFunc(${p.id})>Add a Comment</a>
                  </pre>
                </div>
              </div>
            </div>
            `)
          )
        }
      }
    })
  }
  
  function loadPostsViaId() {
      $.get(`/api/posts/${$('#id').val()}`, (posts) => {
        try{
          if(posts==""){
          return window.alert('Either this id does not exist or this user has not added any post till now')
          }
        for (let p of posts) {
          {
            $('#posts-container').append(
              $(`
              <div  class="col-4">
                <div class="card m-2">
                  <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                    <p class="card-text">
                      ${p.body.substr(0, 200)}<span id="dots">...</span><span id="more" style="display: none;">${p.body.substr(200, p.body.length)}</span>
                    </p>
                    <pre>
                    <a href="#ex1" onclick=myPost(${p.id})>Read More</a>
                    <a href="#"  class="card-link" onClick=myFunc(${p.id})>Add a Comment</a>
                    </pre>
                  </div>
                </div>
              </div>
              `)
            )
          }
        }
      }
      catch(err){
        window.alert('Such Username does not exit')
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