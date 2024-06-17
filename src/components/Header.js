import React from 'react';
import styles from "./Header.module.css"
const Header = ({ onAddClick }) => {
  return (
    <nav className={`navbar navbar-expand-lg p-4 mb-4  ${styles.head}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TODO APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button onClick={onAddClick} className={styles.button} > Add New Task</button>
  </div>
</nav> 
   
  );
};

export default Header;
