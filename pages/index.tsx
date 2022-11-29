import React from "react";
import Board from "../components/Board";
import styles from "../styles/index.module.scss";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Board />
    </div>
  );
};

export default Home;
