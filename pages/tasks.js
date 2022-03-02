import React from "react";
import Kanban from "../components/Kanban";
import Head from "next/head";
import styles from "../public/static/empty.module.css";

function tasks() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Tasks</title>
        <meta name="description" content="Dvi kosulje ez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Kanban />
    </div>
  );
}

export default tasks;
