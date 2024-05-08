import React, { useState, useEffect } from "react";
import "./useEffect.css";

const APIURL = "https://jsonplaceholder.typicode.com/users";
const PHOTOSURL = "https://jsonplaceholder.typicode.com/photos";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [photosLoading, setPhotosLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const [limit, setLimit] = useState("2");

  const [photos, setPhotos] = useState([]);

  const fetchAPI = async (url) => {
    setUsersLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      let response = await fetch(url);
      let users = await response.json();
      setUsers(users);
      setUsersLoading(false);
      if (response.status === 404) {
        throw new Error("Data not found");
      }
    } catch (error) {
      setIsError({
        status: true,
        msg: "Something went wrong, please try again later",
      });
      setUsersLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI(APIURL);
  }, []);

  useEffect(() => {
    const fetchPhotos = async (url) => {
      setPhotosLoading(true);
      setIsError({ status: false, msg: "" });
      if (limit === "") {
        setLimit("2");
      }
      try {
        let response = await fetch(`${url}/?_start=0&_limit=${limit || 2}`);
        let photos = await response.json();
        setPhotos(photos);
        setPhotosLoading(false);
        if (response.status === 404) {
          throw new Error();
        }
      } catch (error) {
        setIsError({
          status: true,
          msg: "Something went wrong, please try again later",
        });
        setPhotosLoading(false);
      }
    };
    fetchPhotos(PHOTOSURL);
  }, [limit]);

  return (
    <div>
      <h1>UseEffect API Fetch</h1>
      {usersLoading === true ? (
        <h3>Please wait...</h3>
      ) : (
        <>
          {isError.status === true ? (
            <h3 className="error">{isError.msg}</h3>
          ) : (
            <ul className="users-container">
              {users.map((eachUser) => {
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
      <input
        className="todo-input"
        style={{ margin: "10px" }}
        type="text"
        placeholder="Enter a number..."
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      />
      <hr />
      {!/^\d+$/.test(limit) || limit < 1 || limit > 5000 ? (
        <h3 className="error">Enter Numbers only from 1 to 5000</h3>
      ) : (
        <>
          {/^\d+$/.test(limit) &&
            (photosLoading ? (
              <h3>Please wait...</h3>
            ) : (
              <>
                {isError.status ? (
                  <h3 className="error">{isError.msg}</h3>
                ) : (
                  <>
                    <h3>Objects Retrieved from API: {photos.length}</h3>
                    <ul className="users-container">
                      {photos.map((eachPhoto) => {
                        const { id, url, title } = eachPhoto;
                        return (
                          <li className="user-container" key={id}>
                            <div>
                              <img
                                style={{ width: "100px" }}
                                src={url}
                                alt={title}
                              ></img>
                            </div>
                            <div>
                              <strong>{title}</strong>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </>
            ))}
        </>
      )}
      <hr></hr>
    </div>
  );
};

export default FetchAPI;
