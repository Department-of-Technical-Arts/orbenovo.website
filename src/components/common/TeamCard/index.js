import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.css";
import { WindowWidth } from "../../../utils/WinDim";

function Index({ index, item }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.bg}
        style={
          WindowWidth > 576
            ? {
                marginTop: index % 2 === 1 ? 50 : 0,
              }
            : null
        }
      >
        <img src={item.Pfp} alt="" className={styles.pfp} />
        <div className={styles.textBox}>
          <div className={styles.post}>
            <p>{item.Post}</p>
          </div>
          <div className={styles.text}>
            <p>{item.Name}</p>
            <p className={styles.phone}>{item.Phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
