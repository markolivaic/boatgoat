import React, { useState, useEffect } from "react";
import styles from "../../../styles/CalendarNavbar.module.scss";

import { motion } from "framer-motion";

function CalendarNavbar({ parentCallback }) {
  const today = new Date();

  const [activeSwitch, setActiveSwitch] = useState("left");
  const [allMonths] = useState([
    "Siječanj",
    "Veljača",
    "Ožujak",
    "Travanj",
    "Svibanj",
    "Lipanj",
    "Srpanj",
    "Kolovoz",
    "Rujan",
    "Listopad",
    "Studeni",
    "Prosinac",
  ]);
  const [monthIndex, setMonthIndex] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const switchVariants = {
    left: { x: 0 },
    right: { x: "100%" },
  };

  useEffect(() => {
    parentCallback({ year, monthIndex });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, monthIndex]);

  const increaseMonth = () => {
    if (monthIndex === 11) {
      setYear(year + 1);
      setMonthIndex(0);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  const decreaseMonth = () => {
    if (monthIndex === 0) {
      setYear(year - 1);
      setMonthIndex(11);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const returnToToday = () => {
    setMonthIndex(today.getMonth());
    setYear(today.getFullYear());
  };

  return (
    <div className={styles.calnav}>
      <div className={styles.address}>
        <h1>Kalendar</h1>
      </div>
      <div className={styles.date}>
        <p onClick={returnToToday}>Danas</p>
        <svg
          onClick={decreaseMonth}
          alt="left arrow"
          style={{ transform: "rotate(90deg)" }}
          width="12"
          height="8"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.09 0.967551L5 3.87755L7.91 0.967551C7.97943 0.898114 8.06187 0.843035 8.15259 0.805456C8.24331 0.767877 8.34055 0.748535 8.43875 0.748535C8.53694 0.748535 8.63418 0.767877 8.7249 0.805456C8.81563 0.843035 8.89806 0.898114 8.9675 0.967551C9.03693 1.03699 9.09201 1.11942 9.12959 1.21014C9.16717 1.30087 9.18651 1.3981 9.18651 1.4963C9.18651 1.5945 9.16717 1.69173 9.12959 1.78246C9.09201 1.87318 9.03693 1.95561 8.9675 2.02505L5.525 5.46755C5.45561 5.53708 5.3732 5.59224 5.28247 5.62988C5.19174 5.66751 5.09447 5.68688 4.99625 5.68688C4.89802 5.68688 4.80076 5.66751 4.71003 5.62988C4.6193 5.59224 4.53688 5.53708 4.4675 5.46755L1.025 2.02505C0.955469 1.95567 0.900309 1.87325 0.862672 1.78252C0.825036 1.69179 0.805664 1.59453 0.805664 1.4963C0.805664 1.39807 0.825036 1.30081 0.862672 1.21008C0.900309 1.11935 0.955469 1.03694 1.025 0.967551C1.3175 0.682551 1.7975 0.675051 2.09 0.967551Z"
            fill="#181D32"
            fillOpacity="0.7"
          />
        </svg>
        <svg
          onClick={increaseMonth}
          alt="right arrow"
          style={{ transform: "rotate(-90deg)" }}
          width="12"
          height="8"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.09 0.967551L5 3.87755L7.91 0.967551C7.97943 0.898114 8.06187 0.843035 8.15259 0.805456C8.24331 0.767877 8.34055 0.748535 8.43875 0.748535C8.53694 0.748535 8.63418 0.767877 8.7249 0.805456C8.81563 0.843035 8.89806 0.898114 8.9675 0.967551C9.03693 1.03699 9.09201 1.11942 9.12959 1.21014C9.16717 1.30087 9.18651 1.3981 9.18651 1.4963C9.18651 1.5945 9.16717 1.69173 9.12959 1.78246C9.09201 1.87318 9.03693 1.95561 8.9675 2.02505L5.525 5.46755C5.45561 5.53708 5.3732 5.59224 5.28247 5.62988C5.19174 5.66751 5.09447 5.68688 4.99625 5.68688C4.89802 5.68688 4.80076 5.66751 4.71003 5.62988C4.6193 5.59224 4.53688 5.53708 4.4675 5.46755L1.025 2.02505C0.955469 1.95567 0.900309 1.87325 0.862672 1.78252C0.825036 1.69179 0.805664 1.59453 0.805664 1.4963C0.805664 1.39807 0.825036 1.30081 0.862672 1.21008C0.900309 1.11935 0.955469 1.03694 1.025 0.967551C1.3175 0.682551 1.7975 0.675051 2.09 0.967551Z"
            fill="#181D32"
            fillOpacity="0.7"
          />
        </svg>
        <h4>
          {allMonths[monthIndex]} {year}
        </h4>
      </div>
      <div className={styles.search_sw}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.625 8.5001H9.0325L8.8225 8.2976C9.29121 7.75308 9.63377 7.11168 9.82566 6.41931C10.0176 5.72694 10.054 5.00072 9.9325 4.2926C9.58 2.2076 7.84 0.542603 5.74 0.287603C5.00171 0.194202 4.25184 0.270932 3.54777 0.51192C2.84369 0.752908 2.20408 1.15177 1.67787 1.67798C1.15166 2.20419 0.752801 2.8438 0.511813 3.54787C0.270825 4.25194 0.194096 5.00181 0.287496 5.7401C0.542496 7.8401 2.2075 9.5801 4.2925 9.9326C5.00061 10.0541 5.72684 10.0177 6.41921 9.82577C7.11158 9.63387 7.75297 9.29132 8.2975 8.8226L8.5 9.0326V9.6251L11.6875 12.8126C11.995 13.1201 12.4975 13.1201 12.805 12.8126C13.1125 12.5051 13.1125 12.0026 12.805 11.6951L9.625 8.5001ZM5.125 8.5001C3.2575 8.5001 1.75 6.9926 1.75 5.1251C1.75 3.2576 3.2575 1.7501 5.125 1.7501C6.9925 1.7501 8.5 3.2576 8.5 5.1251C8.5 6.9926 6.9925 8.5001 5.125 8.5001Z"
            fill="#181D32"
            fillOpacity="0.7"
          />
        </svg>

        <div className={styles.switch}>
          <p
            className={`${styles.sw_month} ${
              activeSwitch === "left" && styles.sw_active
            }`}
            onClick={() => setActiveSwitch("left")}
          >
            Mjesec
          </p>
          <p
            className={`${styles.sw_week} ${
              activeSwitch === "right" && styles.sw_active
            }`}
            onClick={() => setActiveSwitch("right")}
          >
            Tjedan
          </p>
          <motion.div
            className={styles.sw_active_box}
            animate={activeSwitch}
            variants={switchVariants}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default CalendarNavbar;
