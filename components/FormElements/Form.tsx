import React, { useEffect, useState } from 'react'
import { Place } from '../../types'

type FormData = { name: String; email: string; currentLocation?: Place}

type FormProps = {
  handleSubmit: ({ name, email }: FormData) => void
  currentLocation?: Place
}

const isValid = ({ name, email, currentLocation }: FormData) => {
  return name && name.length > 2 && email.includes('@') && currentLocation
}

const Form = ({ handleSubmit, currentLocation }: FormProps) => {
  const [data, setData] = useState({ email: '', name: '', currentLocation })
  const [error, setError] = useState('')
  const [isDirty, setIsDirty] = useState(false)

  useEffect(() => {
    if (!isValid(data) && isDirty) {
      setError('Navn og / eller e-post er ikke gyldig')
    } else {
      setError('')
    }
  }, [data, isDirty])

  const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target?.id
    if (id && Object.keys(data).includes(id)) {
      setIsDirty(true)
      setData((prev) => ({ ...prev, [id]: event.target.value }))
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isValid(data)) {
      handleSubmit(data)
    }
  }

  return (
    <form className="comment" onSubmit={handleFormSubmit}>
      <label htmlFor="name">
        <input
          id="name"
          data-testid="name"
          type="text"
          placeholder="Navn"
          onChange={handleData}
          value={data.name}
        />
      </label>
      <label htmlFor="email">
        <input
          id="email"
          data-testid="email"
          type="text"
          placeholder="Email"
          onChange={handleData}
          value={data.email}
        />
      </label>
      {currentLocation ? (
        <input
          id="place"
          value={currentLocation}
          data-testid="place"
          disabled
          type="text"
        />
      ) : null}

      {error ? (
        <span className="error" data-testid="error">
          Noe gikk galt
        </span>
      ) : null}
      <button>Send</button>
    </form>
  )
}

export default Form
