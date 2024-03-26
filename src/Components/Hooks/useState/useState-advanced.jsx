import React, { useState } from 'react';
import './useState.css';

const  ObjectDataChange = () => {
  const customers = [
    {
      id: "1",
      firstname: "Suresh Kumar",
      lastname: "Gummadapu",
      age: "29"
    },
    {
      id: "2",
      firstname: "Haleema Sulthana",
      lastname: "Shaik",
      age: "28"
    },
  ];

  const [customer, setCustomer] = useState(customers);
  const [data, changeData] = useState({firstname: "Suresh Kumar", lastname: "Gummadapu", age: "29"})

  const changeFirstname = () => {
    changeData({
      ...data,
      firstname: "Haleema Sulthana"
    })
  }

  const changeLastname = () => {
    changeData({
      ...data,
      lastname: "Shaik"
    })
  }

  const changeAge = () => {
    changeData({
      ...data,
      age: "28"
    })
  }

  const changeAll = () => {
    changeData({
      firstname: "Testing First name",
      lastname: "Testing Last name",
      age: "Testing Age"
    })
  }

  const handleDelete = (id) => {
    const filteredItem = customer.filter((eachCust) => eachCust.id !== id);
    setCustomer(filteredItem); 
  }

  return (
    <div>
      <h2>useState Example-2</h2>
      <h2>First name is: {data.firstname}</h2>
      <button className="count-btn" onClick={changeFirstname}>Change First name</button>
      <h2>Last name is: {data.lastname}</h2>
      <button className="count-btn" onClick={changeLastname}>Change Last name</button>
      <h2>Age is: {data.age}</h2>
      <button className="count-btn" onClick={changeAge}>Change Age</button>
      <button style={{display:"block"}} className="count-btn" onClick={changeAll}>Change All</button>
      <hr></hr>
      {customer.length !==0 && (
        <>
          <h2>useState Example-3</h2>
            <ul style={{listStyleType: "none"}}>
              {customer.map((eachCust) => {
                  const {firstname, lastname, age, id} = eachCust;
                  return (
                  <li key={id}>
                    <div><strong>{firstname}</strong></div>
                    <div><strong>{lastname}</strong></div>
                    <div><strong>{age}</strong></div>
                    <button onClick={() => handleDelete(id)} className="count-btn">Delete</button>
                  </li>
                )})
              }        
            </ul>
          <hr></hr>
        </> )
      }
    </div>
  )
}

export default ObjectDataChange;