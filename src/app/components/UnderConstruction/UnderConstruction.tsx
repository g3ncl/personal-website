// UnderConstructionPage.jsx
import React from "react";
import { Code } from "lucide-react";
import styles from "./styles/styles.module.scss";

const UnderConstructionPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Code className={styles.icon} />
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.description}>
          {"Hello! I'm crafting my personal corner of the web."}
        </p>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar}></div>
        </div>
        <p className={styles.launchDate}>Expected launch: Soon™</p>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
