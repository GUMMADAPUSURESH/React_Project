import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DynamicFormHandling = () => {
  const [formData, setFormData] = useState({username: "", email: "", password: ""});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success');
    console.log(formData)
    setFormData({username: "", email: "", password: ""});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br/>
        <div>
          <input className='todo-input'
          type='text'
          name='username'
          id='username'
          value={formData.name}
          placeholder='Enter your name' 
          onChange={(e) => handleChange(e)} />
        </div><br/>
        <div>
          <input className='todo-input'
          type='email'
          name='email'
          id='email'
          value={formData.email}
          placeholder='Enter your Email'
          onChange={(e) => handleChange(e)} />
        </div><br/>
        <div>
          <input className='todo-input'
          type='password'
          name='password'
          id='password'
          value={formData.password}
          placeholder='Enter Passowrd'
          onChange={(e) => handleChange(e)} />
        </div>
        <button className='count-btn'>Submit</button>
      </form>
      <hr></hr>
    </div>
  )
}

export default DynamicFormHandling;
