const form = document.getElementById('contact')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let name = document.getElementById('name')
  let email = document.getElementById('email')
  let message = document.getElementById('message')

  const body = JSON.stringify({
    name: name.value,
    email: email.value,
    message: message.value
  })

  fetch('https://dev-site-email-app.azurewebsites.net/api/addEmail', {
      method: 'POST',
      mode: 'no-cors',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => {
      name.value = ''
      email.value = ''
      message.value = ''
    })
    .catch(err => {
      console.error(err)
    })
})