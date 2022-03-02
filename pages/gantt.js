import React from "react";
import Head from "next/head";
import Gantt from "../components/Gantt";
import styles from "../public/static/empty.module.css";

export default function gantt() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Gantt</title>
        <meta name="description" content="Dvi kosulje ez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gantt />
    </div>
  );
}
