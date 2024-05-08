import React from "react";
import { useFetchAPI } from "./CustomHook-Functions";

const URL = "https://jsonplaceholder.typicode.com/user";

const FetchAPIOne = () => {
  const [users, isLoading, isError] = useFetchAPI(URL);

  return (
    <div>
      <h3>FetchAPIOne Custom Hook Example</h3>
      {isLoading ? (
        <h3>Please wait...</h3>
      ) : (
        <>
          {isError.status ? (
            <h3 className="error">{isError.msg}</h3>
          ) : (
            <ul className="users-container">
              {users?.map((eachUser) => {
                const { id, name, email } = eachUser;
                return (
                  <li className="user-container" key={id}>
                    <div>
                      Name: <strong>{name}</strong>
                    </div>
                    <div>
                      Email: <strong>{email}</strong>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <hr></hr>
        </>
      )}
    </div>
  );
};

export default FetchAPIOne;
