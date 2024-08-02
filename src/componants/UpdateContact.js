import React, { useState } from 'react'
import styles from "../styles/userData.module.css";
import { toast } from 'react-toastify';


const UpdateContact = ({ user, handleUpdate,  setUpdate}) => {

    const [name, setName] = useState(user.name);
    const [number, setNumber] = useState(user.phone);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState({
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode
    });

    

    const handleSubmit = () => {
        if (!name || !number || !email) {
          console.log("enter som");
          toast.error("Please write something in post", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
            method: "PUT",
            body: JSON.stringify({
              name: name,
              phone: number,
              email: email,
              address: {
                street: address.street,
                city: address.city,
                zipcode: address.zipcode
              }
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
    
              handleUpdate(data.id, data);
              setEmail("newUsers");
              setName("");
              setNumber("");
              alert("User Updated SuccessFully!!!");
              setUpdate(false);
            });
        }
      };

     const handleClose = () => {
        setUpdate(false)   
     }

  return (
    <div className={styles.updateContact}>

         <div className={styles.close} onClick={handleClose}>X</div>
        <h1>Update Contact</h1>
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

        <button onClick={handleSubmit}>Update</button>
      </div> 
    </div>
  )
}

export default UpdateContact
