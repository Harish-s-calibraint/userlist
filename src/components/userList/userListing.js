import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import "./userList.css";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const UserListing = () => {
  const userRef = useRef();
  const users = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();
  const [idx, setIdx] = useState("");
  const [fetchUsers, setGetStatus] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  useEffect(() => {
    if (userRef.current) {
      userRef.current.scrollIntoView({ block: "end" });
    }
  }, [users]);

  useEffect(() => {
    if (fetchUsers) {
      dispatch(setUser(fetchUsers));
    }
    console.log(fetchUsers, setGetStatus, "fetch");
  }, [fetchUsers]);

  let element = document.getElementById(`userlist-${idx}`);
  const handleSubmit = (event) => {
    event.preventDefault();
    element.scrollIntoView({ block: "end" });
  };

  return (
    <div className="listing-container" ref={userRef}>
      <button id="btn-1" onClick={() => setGetStatus(true)}>
        Load More
      </button>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Enter Id:
            <input
              type="number"
              name="id"
              value={idx}
              onChange={(e) => setIdx(e.target.value)}
            />
          </label>
          <input type="submit" placeholder="Search User" />
        </form>
      </div>

      <div className="list">
        {users.map((user, index) => {
          const { id, name, phone, username } = user;
          return (
            <>
              <div className="container">
                <div className="user-cards">
                  <Link to={`/user/${id}`} className="link">
                    <div className="card" id={`userlist-${index}`}>
                      <div className="name">{name}</div>
                      <div className="username">
                        <h4>Username:</h4>
                        {username}
                      </div>
                      <div className="phone">
                        <h4>Phone</h4>
                        {phone}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

// useEffect(() => {
//   console.log(fetchUsers)
// }, [fetchUsers])

// const fetchUsers = async () => {
//   const response = await axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .catch((err) => {
//       console.log("Err", err);
//     });
//   dispatch (setUser(response.data));
// };

export default UserListing;
