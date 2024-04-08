import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useFetchAPI } from '../Hooks/Custom Hooks/CustomHook-Functions';

const URL = "https://jsonplaceholder.typicode.com/users";

const DynamicRoutesUserDetails = () => {
    const [users, isLoading] = useFetchAPI(URL);

    const {userID} = useParams();
    const id = parseInt(userID);

    const userDetails = users.find((eachUser) => eachUser.id === id);
    const {name, username, phone, address} = userDetails || {};

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>User Details</h1>
      <div className='nested-card'>
        {isLoading && <p>Loading...</p>}
        {!isLoading && !userDetails && <h3>User details not found</h3>}
        {!isLoading && userDetails && (
            <>
                <h2>Name: {name}</h2>
                <h3>Username: {username}</h3>
                <h4>Phone: {phone}</h4>
                <h5>City: {address.city}</h5>
            </>
        )}
      </div>
      <Link to='/users'>
        <button className='count-btn'>Back to Users</button>
      </Link>
    </div>
  )
}

export default DynamicRoutesUserDetails;
