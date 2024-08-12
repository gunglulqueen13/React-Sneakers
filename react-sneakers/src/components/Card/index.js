import styles from "./Card.module.scss";
import React, { useState } from "react";

function Card({ title, imageUrl, price, onFavorite, onPlus, onDelete }) {
  const [checked, setChecked] = useState(0);
  const onClickButton = () => {
    checked
      ? onDelete({ title, imageUrl, price })
      : onPlus({ title, imageUrl, price });
    setChecked(!checked);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img height={112} width={133} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="text-uppercase">Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickButton}
          src={checked ? "/img/btn-checked.svg" : "/img/plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
export default Card;
