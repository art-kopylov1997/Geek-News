import React from "react";
import styles from "./Parallax.module.scss";

const Parallax = () => (
  <div className={styles.root}>
    <div>
      <h1>Ноутбук Predator Triton 500 SE PT516-51s-953W</h1>
      <p>Лучшее решение для топового гейминга</p>
    </div>

    <div className={styles.background} />
  </div>
);

export default Parallax;
