import React from "react";
import Link from "next/link";

import styles from "../../styles/AccountType.module.scss";

import { motion } from "framer-motion";

import { useRouter } from "next/router";

export default function AccountType() {
  const router = useRouter();

  return (
    <div className={styles.acc_type}>
      <div className={styles.content}>
        <h1>Ja sam</h1>
        <div className={styles.buttons}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            style={{ marginRight: "1rem" }}
            onClick={() => router.push("/registerArtist")}
          >
            Vozač
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            onClick={() => router.push("/registerCompany")}
          >
            Osoba
          </motion.button>
        </div>
        <div className={styles.links}>
          <a>Zaboravili ste zaporku?</a>
          <Link href="/login">
            <a>Već imate račun? </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
