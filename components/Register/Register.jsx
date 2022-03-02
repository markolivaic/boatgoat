import React, { useState } from "react";
import styles from "../../styles/Register.module.scss";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/infoActions";

import { useRouter } from "next/router";

import { motion } from "framer-motion";

function Register({ isArtist }) {
  const dispatch = useDispatch();

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitUser = () => {
    dispatch(register(name, email, password, "User"));
    router.push("/home");
  };

  const handleSubmitCompany = () => {
    dispatch(register(name,email,password, "Company"));
    router.push("/home")
  }

  return (
    <div className={styles.register}>
      <div className={styles.content}>
        <div className={styles.register_modal}>
          <h1>{isArtist ? "Kreirajte vaš račun" : "Kreirajte vaš račun"}</h1>
          <label htmlFor="name">{isArtist ? "IME" : "IME"}</label>
          <input
            id="name"
            type="text"
            placeholder="Upiši ime"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            type="email"
            placeholder="Upiši email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">ZAPORKA</label>
          <input
            id="password"
            type="password"
            placeholder="Upiši zaporku"
            onChange={(e) => setPassword(e.target.value)}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={isArtist ? handleSubmitUser : handleSubmitCompany}
          >
            Kreiraj račun
          </motion.button>
          <div className={styles.links}>
            <a>Zaboravili ste zaporku?</a>
            <Link href="/login">
              <a>Već imate račun? </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
