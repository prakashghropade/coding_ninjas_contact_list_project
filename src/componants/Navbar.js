import styles from "../styles/navbar.module.css";

export default function Navbar({handleClose}) {



  return (
    <div className={styles.nav}>
        <div >Contact List</div>
        
        <div onClick={handleClose}>Add Contact</div>

    </div>
  )
}
