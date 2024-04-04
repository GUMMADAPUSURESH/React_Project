import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormHandling = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassowrd] = useState("")

  const navigate = useNavigate();

  const handleChange = (e, name) => {
    if (name === "name") {
      setName(e.target.value)
    } else if (name === "email") {
      setEmail(e.target.value)
    } else if (name === "password") {
      setPassowrd(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullname: name,
      email: email,
      password: password
    }
    navigate('/success');
    console.log(formData)
    setName("")
    setEmail("")
    setPassowrd("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br/>
        <div>
          <input className='todo-input'
          type='text'
          name='name'
          id='name'
          value={name}
          placeholder='Enter your name' 
          onChange={(e) => handleChange(e, "name")} />
        </div><br/>
        <div>
          <input className='todo-input'
          type='email'
          name='email'
          id='email'
          value={email}
          placeholder='Enter your Email'
          onChange={(e) => handleChange(e, "email")} />
        </div><br/>
        <div>
          <input className='todo-input'
          type='password'
          name='password'
          id='password'
          value={password}
          placeholder='Enter Passowrd'
          onChange={(e) => handleChange(e, "password")} />
        </div>
        <button className='count-btn'>Submit</button>
      </form>
      <hr></hr>
    </div>
  )
}

export default FormHandling
