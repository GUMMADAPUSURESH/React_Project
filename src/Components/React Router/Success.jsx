import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/')
    }

  return (
    <div style={{height: '93vh', width: '100%', display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{color: 'green'}}>Form Submitted Successfully</h1>
        <button className='count-btn' style={{marginTop: '10px'}} onClick={handleBackToHome}>Back to Home</button>
    </div>
  )
}

export default Success;