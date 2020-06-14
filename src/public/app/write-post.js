$('#btn-primary').click(()=>{
    if(($('#title').val()=="")||($('#body').val()=="")){
        return window.alert('Need Both Title as well as body')
    }
const userId = currentUser.id
  const title = $('#title').val()
  const body = $('#body').val()
  console.log(userId,title,body)
    {
        $.post('/api/posts', { userId, title, body}, (data) => {
            window.alert(`${$('#title').val()} has been added`)
            let componentUrl = `/components/all-posts.html`
            $('#content').load(componentUrl)
          })
    }
})