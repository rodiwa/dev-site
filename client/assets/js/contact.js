const form = document.getElementById('contact')

const handleFormBehavior = ({
  domItems
}) => {
  const {
    nameDOM,
    emailDOM,
    messageDOM,
    // infoMessageDOM,
    thankYouMessageDOM
  } = domItems

  nameDOM.value = ''
  emailDOM.value = ''
  messageDOM.value = ''

  // infoMessageDOM.style.display = 'none'
  thankYouMessageDOM.style.display = 'unset'

  setTimeout(() => {
    // infoMessageDOM.style.display = 'unset'
    thankYouMessageDOM.style.display = 'none'
  }, 3000)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let nameDOM = document.getElementById('name')
  let emailDOM = document.getElementById('email')
  let messageDOM = document.getElementById('message')

  const name = nameDOM.value
  const email = emailDOM.value
  const message = messageDOM.value

  // const infoMessageDOM = document.getElementById('info')
  const thankYouMessageDOM = document.getElementById('thanks')
  const noSubmitMessageDOM = document.getElementById('no-submit-msg')

  // show no-submit message if not enough details
  if (!name.trim() || !email.trim() || !message.trim()) {
    noSubmitMessageDOM.style.display = 'unset'
    setTimeout(() => {
      noSubmitMessageDOM.style.display = 'none'
    }, 3000)
    return
  }

  const domItems = {
    nameDOM,
    emailDOM,
    messageDOM,
    // infoMessageDOM,
    thankYouMessageDOM
  }
  handleFormBehavior({
    domItems
  })

  const body = JSON.stringify({
    user_name: name,
    email,
    message
  })

  fetch('https://contact-form-python.azurewebsites.net/api/orchestrators/HelloOrchestrator', {
    method: 'POST',
    mode: 'no-cors',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .catch(err => {
      console.error(err)
    })
})
