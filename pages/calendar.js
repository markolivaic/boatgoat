import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Head from "next/head";
import styles from "../public/static/empty.module.css";

function calendar() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Calendar</title>
        <meta name="description" content="Dvi kosulje ez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calendar />
    </div>
  );
}

export default calendar;
