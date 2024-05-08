import React from "react";
import { useFetchAPI } from "./CustomHook-Functions";

const URL = "https://jsonplaceholder.typicode.com/posts";

const FetchAPITwo = () => {
  const [posts, isLoading, isError] = useFetchAPI(URL);

  return (
    <div>
      <h3>FetchAPITwo Custom Hook Example</h3>
      {isLoading ? (
        <h3>Please wait...</h3>
      ) : (
        <>
          {isError.status ? (
            <h3 className="error">{isError.msg}</h3>
          ) : (
            <ul className="users-container">
              {posts?.map((eachUser) => {
                const { id, title } = eachUser;
                return (
                  <li className="user-container" key={id}>
                    <div>
                      <strong>Title: </strong>
                      {title}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <hr></hr>
        </>
      )}
      <hr></hr>
    </div>
  );
};

export default FetchAPITwo;
