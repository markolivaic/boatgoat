import React from "react";
import Register from "../components/Register/Register";
import Head from "next/head";
import styles from "../public/static/empty.module.css";

function register() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Dvi kosulje ez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register isArtist={false}/>
    </div>
  );
}

export default register;