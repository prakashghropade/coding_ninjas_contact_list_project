import "../styles/styles.css";
import Navbar from "./Navbar";
import Main from "./Main";
import { useState } from "react";
export default function App() {

    
  const [addcontact, setAddContact] = useState(false);
    
  const handleClose = () => {
    setAddContact((prev) => !prev);
  }

  return (

    <div className="App">
      <Navbar  handleClose={handleClose} />
      <Main handleClose={handleClose}  addcontact={addcontact}/>
    </div>
  )
}
