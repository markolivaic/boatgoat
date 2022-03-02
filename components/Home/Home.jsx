import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";

import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../redux/actions/colormodeActions";

import Profile from "./Profile/Profile";
import ActivityLog from "./ActivityLog/ActivityLog";

function Home() {
  const colormode = useSelector((state) => state.color.colormode);
  const user = useSelector((state) => state.info.user);

  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.home} ${
        colormode === "dark" ? styles.home_dark : ""
      }`}
    >
      <div className={styles.top}>
        <div className={styles.name_address}>
          <h4>Pozdrav, {user && user.name}</h4>
        </div>
      </div>
      {
        user &&       
        <div className={styles.content}>
          <Profile />
          <ActivityLog />
      </div>
      }

    </div>
  );
}

export default Home;
