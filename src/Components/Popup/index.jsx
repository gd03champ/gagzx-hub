import React, {useState} from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { useEffect } from "react";


export default function Popup() {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
      alert("Touch rithik ra to continue! ")
    },[])

    function handleYesClick() {
      alert('Congratulations!, you have touched rithik rag');
      setShowPopup(false);
    }
    
    return (
      <div>
      {showPopup && (
        <div className={styles.popup_background}>
          <div className={styles.popup}>
            <img onClick={handleYesClick} src="https://user-images.githubusercontent.com/63779654/233128671-683d127e-1ab6-4b3b-a0ff-90e491f8c515.jpg" alt="Popup Image" />
          </div>
        </div>
      )}
    </div>

    )
}
