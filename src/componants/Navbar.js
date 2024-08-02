import styles from "../styles/navbar.module.css";

export default function Navbar({handleClose}) {



  return (
    <div className={styles.nav}>
        <div >Contact List</div>
        
        <div onClick={handleClose} style={{cursor:"pointer"}}>Add Contact</div>

    </div>
  )
}
