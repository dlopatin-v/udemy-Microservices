import { useState } from 'react'
import axios from 'axios'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    const response = await axios.post('/api/users/signup', {
      email,
      password
    })

    console.log(response.data)
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className='for-group'>
        <label>Email Address</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text'
          className='form-control'
        ></input>
      </div>
      <div className='for-group'>
        <label>Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          className='form-control'
        ></input>
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  )
}
