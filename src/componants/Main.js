import { useEffect, useState } from "react";
import styles from "../styles/main.module.css";
import UserData from "./UserData";
import AddContact from "./AddContact";

export default function Main({handleClose, addcontact}) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleUpdate = (id, data) => {
    const newList = users.map((user) => {
      if (user.id === id) {
        return data;
      }
      return user;
    });

    setUsers(newList);
    setUser(data);
  };

  const deleteContact = (id) => {
    const newList = users.filter((user) => user.id !== id);
    setUsers(newList);
    alert("User Deleted SuccessFully...")
    if (newList.length !== 0) {
      setUser(newList[0]);
    } else {
      setUser({});
    }
  };



  return (
    <div className={styles.container}>
      
      {/* <div className={styles.addContact}>
        <input
          required
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="number"
          value={number}
          placeholder="Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          required
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div> */}

      <div className={styles.mainContainer}>

        <div className={styles.usersListContainer}>
           <div className={styles.innerlist}> 

          {
          
          users.map((user) => (
            <div
              key={user.id}
              className={styles.userContainer}
              onClick={() => {
                setUser(user);
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt="pic"
              />
              <div className={styles.userName}>
                <span className={styles.name}>{user.name}</span>
                <span className={styles.email}>{user.email}</span>
              </div>
            </div>
          ))}

            </div>
        </div>

        <UserData
          user={user}
          handleUpdate={handleUpdate}
          deleteContact={deleteContact}
        />

        {
        addcontact && <AddContact handleClose={handleClose} users={users} setUsers={setUsers} />
        }  
      </div>
    </div>
  );
}
