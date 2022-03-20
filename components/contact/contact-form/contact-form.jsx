import React, { useReducer, useRef, useState } from 'react'
import classes from '../contact.module.css'

const initialState = {
  nameIsValid: null,
  emailIsValid: null,
  messageIsValid: null,
}

function isValidReducer(state, action) {
  if (action.type === 'VALIDATE_EMAIL') {
    return {
      ...state,
      emailIsValid: action.value.includes('@') && action.value.length < 30,
    }
  }

  if (action.type === 'VALIDATE_NAME') {
    return {
      ...state,
      nameIsValid: action.value.trim().length > 0 && action.value.length < 30,
    }
  }

  if (action.type === 'VALIDATE_MESSAGE') {
    return {
      ...state,
      messageIsValid: action.value.length > 0 && action.value.length < 250,
    }
  }

  return initialState
}

function ContactForm() {
  const [isValid, dispatch] = useReducer(isValidReducer, initialState)
  const [status, setStatus] = useState(null)

  const emailInputRef = useRef()
  const nameInputRef = useRef()
  const messageInputRef = useRef()

  async function onSubmitHandler(event) {
    event.preventDefault()
    setStatus('Sending...')
    const enteredEmail = emailInputRef.current.value
    const enteredName = nameInputRef.current.value
    const enteredMessage = messageInputRef.current.value

    const mail = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    }

    if (isValid.nameIsValid && isValid.emailIsValid && isValid.messageIsValid) {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(mail),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus('Something went wrong!')
        console.log(data)
      }

      if (response.ok) {
        emailInputRef.current.value = ''
        nameInputRef.current.value = ''
        messageInputRef.current.value = ''
        dispatch({ type: 'RESET' })
        setStatus('Message sent!')
      }
    } else {
      setStatus('Please enter valid inputs')
    }
  }

  function nameValidHandler(event) {
    dispatch({ type: 'VALIDATE_NAME', value: event.target.value })
  }

  function emailValidHandler(event) {
    dispatch({ type: 'VALIDATE_EMAIL', value: event.target.value })
  }

  function messageValidHandler(event) {
    dispatch({ type: 'VALIDATE_MESSAGE', value: event.target.value })
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">
          {isValid.nameIsValid !== false && 'Name'}
          {isValid.nameIsValid === false && 'A valid name is required.'}
          <input
            className={`${
              isValid.nameIsValid === false ? classes.invalid : ''
            }`}
            id="name"
            type="text"
            ref={nameInputRef}
            onBlur={nameValidHandler}
          />
        </label>
        <label htmlFor="email">
          {isValid.emailIsValid !== false && 'Email'}
          {isValid.emailIsValid === false && 'A valid email is required.'}
          <input
            className={`${
              isValid.emailIsValid === false ? classes.invalid : ''
            }`}
            id="email"
            type="email"
            ref={emailInputRef}
            onBlur={emailValidHandler}
          />
        </label>
        <label htmlFor="message">
          {isValid.messageIsValid !== false && 'Message'}
          {isValid.messageIsValid === false &&
            'A message of less then 250 characters is required.'}
          <textarea
            className={`${
              isValid.messageIsValid === false ? classes.invalid : ''
            }`}
            name="message"
            id="message"
            cols="30"
            rows="5"
            ref={messageInputRef}
            onBlur={messageValidHandler}
          />
        </label>
      </div>
      <button type="submit">
        {status === null ? 'Submit Message' : status}
      </button>
    </form>
  )
}

export default ContactForm
