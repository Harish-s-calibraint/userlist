import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./userList.css";

const UserComponent = () => {
  const users = useSelector((state) => state.allUsers.users);
    
  return (
    <>
      {users.map((user) => {
      const { id, name, phone, username } = user;
      return (
        <>
          <div className="container">
            <div className="user-cards" key={id}>
              <Link to={`/user/${id}`} className="link">
                <div className="card" id={`${id}`}>
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
    })
    }
    </>
  );
};

export default UserComponent;
