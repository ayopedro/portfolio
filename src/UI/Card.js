import React from "react";
import styles from "./Card.module.css";

function Card({ title, url, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.preview}></div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <small>{type}</small>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          diam orci pretium a pharetra, feugiat cursus. 
        </p>
        <button className={styles.btn}>
          <a href={url} target="_blank" rel="noreferrer">
            Visit Page
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
