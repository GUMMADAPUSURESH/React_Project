import React from 'react';
import { useFetchAPI } from '../Hooks/Custom Hooks/CustomHook-Functions';
import { Link } from 'react-router-dom';
import './dynamicroutes.css';

const URL = "https://jsonplaceholder.typicode.com/users";

const DynamicRoutesUsers = () => {
  const [users, isLoading, isError] = useFetchAPI(URL);

  return (
    <div>
        <h1>Users</h1>
        {isLoading && <h4>Loading...</h4>}
        {!isLoading && !isError.status &&
            <div className='users-container'>
                {users.map((eachUser) => {
                    const {id, name} = eachUser;
                    return (
                        <Link className='user-container' to={`/users/${id}`} key={id}>
                            <article>User: {name}</article>
                        </Link>
                    )
                })}
            </div>
        }
    </div>
  )
}

export default DynamicRoutesUsers;
