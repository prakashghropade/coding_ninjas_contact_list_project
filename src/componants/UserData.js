import { useState } from "react";
import styles from "../styles/userData.module.css";
import UpdateContact from "./UpdateContact";

function UserData({ user, handleUpdate, deleteContact }) {

  const [isUpdate, setIsUpdate] = useState(false);

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: "DELETE",
    });

    deleteContact(user.id);

    user = {};
  };


  const handleUpdatebtn = () => {
     setIsUpdate((prev) => !prev);
     console.log(isUpdate);
  }

  

  if (Object.keys(user).length === 0) {
    return <div className={styles.empty}>Click on user to see deatails</div>;
  }

  return (
    <div className={styles.container}>
    

      <div className={styles.userDataContainer}>
        <div className={styles.userProfile}>
          <img
            id={styles.userpic}
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            alt="pic"
          />

          <div className={styles.userName}>
            <span className={styles.name}>{user?.name}</span>
            <span className={styles.email}>{user?.email}</span>
          </div>

        </div>
      
        <div className={styles.addressConatainer}>

          <div className={styles.addressinnercontiner}>

          <div className={styles.add}>
          <span className={styles.title}>Phone</span>
          <span className={styles.value}>{user?.phone}</span>
          </div>

          <div className={styles.add}>
            <span className={styles.title}>Address</span>
            <span className={styles.value}>{user?.address?.street}</span>
          </div>

          </div>
         

          <div className={styles.addressinnercontiner}>
          <div className={styles.add}>
            <span className={styles.title}>City</span>
            <span className={styles.value}>{user?.address?.city}</span>
          </div>

          <div className={styles.add}>
            <span className={styles.title}>Zip code</span>
            <span className={styles.value}>{user?.address?.zipcode}</span>
          </div>
        </div>

        

        </div>

        <div>
        <button className={styles.deletBtn} onClick={handleDelete}>Delete Contact</button>
        <button className={styles.deletBtn} onClick={handleUpdatebtn} >Update</button>
        </div> 

        </div>

        {
          isUpdate && <UpdateContact 
          user={user}
          handleUpdate={handleUpdate}
          deleteContact={deleteContact}
          setUpdate = {setIsUpdate}
          />
        }
    </div>
      

  );
}

export default UserData;
