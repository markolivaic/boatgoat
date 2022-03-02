import React from "react";
import Login from "../components/Login/Login";
import Head from "next/head";
import styles from "../public/static/empty.module.css";

function login() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Dvi kosulje ez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}

export default login;
