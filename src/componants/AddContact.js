import React, { useState } from 'react'
import styles from "../styles/userData.module.css";

const AddContact = ({handleClose, users, setUsers}) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState({
        street: "",
        city: "",
        zipcode: ""
    });


  const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phone: number,
        email: email,
        address: address
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const newUsers = [data, ...users];
        setUsers(() => newUsers);
        console.log("after", newUsers);
      });
      alert("User Added SuccessFully!!!")
      handleClose();
  };


  return (
    <>
       
    <div className={styles.updateContact}>

         <div className={styles.close} onClick={handleClose}>X</div>
        <h1>Add Contact</h1>
         <div className={styles.addContact}>
        <div className={styles.inputbox}>
           <p>Name</p>
           <input
          required
          type="text"
          value={name}
          id='name'
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        
        <div className={styles.inputbox}>
           <p>Number</p>
        <input
          required
          type="text"
          value={number}
          placeholder="Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        </div>

        <div className={styles.inputbox}>
           <p>Email</p>
        <input
          required
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div className={styles.inputbox}>
           <p>Street</p>
        <input
          required
          type="text"
          value={address.street}
          placeholder="Street"
          onChange={(e) => setAddress({street: e.target.value,
                                       city: address.city,
                                       zipcode: address.zipcode
                               }) }
        />
        </div>

        <div className={styles.inputbox}>
        <p>City</p>
        <input
          required
          type="text"
          value={address.city}
          placeholder="City"
          onChange={(e) => setAddress({street: address.street,
            city: e.target.value,
            zipcode: address.zipcode
    }) }
        />
        </div>

        <div className={styles.inputbox}>
        <p>Zipcode</p>
        <input
          required
          type="text"
          value={address.zipcode}
          placeholder="zipcode"
          onChange={(e) => setAddress({street: address.street,
            city: address.city,
            zipcode: e.target.value
    }) }
        />
        </div>

        <button onClick={handleSubmit}>Add</button>
      </div> 
    </div>
    </>
  )
}

export default AddContact
