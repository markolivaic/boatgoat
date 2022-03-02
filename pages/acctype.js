import React from "react";
import AccountType from "../components/AccountType/AccountType";
import Head from "next/head";
import styles from "../public/static/empty.module.css";

function acctype() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Account Type</title>
        <meta name="description" content="Dvi kosulje ez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountType />
    </div>
  );
}

export default acctype;
