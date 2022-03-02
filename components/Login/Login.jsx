import React from "react";
import styles from "../../styles/Login.module.scss";
import Link from "next/link";

import { motion } from "framer-motion";

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <h1>Prijavi se</h1>
        <label htmlFor="email">EMAIL</label>
        <input id="email" type="email" placeholder="Upiši svoj email" />
        <label htmlFor="password">ZAPORKA</label>
        <input
          id="password"
          type="password"
          placeholder="Upiši svoju zaporku"
        />
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Prijavi se
        </motion.button>
        <div className={styles.links}>
          <a>Zaboravili ste zaporku?</a>
          <Link href="/acctype">
            <a>Nemate račun? </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
