/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../../../../styles/ActivityDetails.module.scss";

import { motion } from "framer-motion";

import {
  deleteActivity,
  setActiveActivity,
} from "../../../../redux/actions/activityActions";
import { useDispatch, useSelector } from "react-redux";

function ActivityDetails({ opened }) {
  let activity = useSelector((state) => state.activity.activeActivity);
  const dispatch = useDispatch();

  const colormode = useSelector((state) => state.color.colormode);

  const [open, setOpen] = useState(false);
  const [day, setDay] = useState();
  const [time, setTime] = useState();

  if (!activity) {
    activity = {
      title: "Unknown",
      author: "Unknown",
    };
  }

  const [bgColor, setBgColor] = useState("#ffffff");
  const [mainFontColor, setMainFontColor] = useState("white");
  const [secondaryFontColor, setSecondaryFontColor] = useState("#747784");
  const [iconColor, setIconColor] = useState("#5e6170");
  const [categoryFontColor, setCategoryFontColor] = useState("#5d6170");
  const [borderColor, setBorderColor] = useState("#e3e4e6");

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("#ffffff");
      setMainFontColor("black");
      setSecondaryFontColor("#747784");
      setIconColor("#5e6170");
      setCategoryFontColor("#5d6170");
      setBorderColor("#e3e4e6");
    } else {
      setBgColor("#323339");
      setMainFontColor("white");
      setSecondaryFontColor("#adadb0");
      setIconColor("#adadb0");
      setCategoryFontColor("#adadb0");
      setBorderColor("#4b4b51");
    }
  }, [colormode]);

  useEffect(() => {
    const date = new Date(activity.date);
    const today = new Date();

    // Set date

    if (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      // If today
      if (date.getDate() === today.getDate()) setDay("Today");
      // If yesterday
      else if (date.getDate() === today.getDate() - 1) setDay("Yesterday");
      // If any other day
      else {
        setDay(
          `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        );
      }
      // If any other month or year
    } else {
      setDay(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
    }

    // Set time
    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = hours % 12;

    hours = hours ? hours : 12; // If hours is 0 it should be 12

    minutes = minutes < 10 ? "0" + minutes : minutes;

    setTime(`${hours}:${minutes}`);

    if (!activity) {
      setDay("Unknown");
      setTime("Unknown");
    }
  }, [activity]);

  const [imgs] = useState([
    {
      imgUrl:
        "https://nypost.com/wp-content/uploads/sites/2/2020/10/lebron_cigar.jpg?quality=80&strip=all",
      filetype: "img",
      filename: "Slika 1",
    },
    {
      imgUrl:
        "https://zadarska-riva.hr/themes/riva/assets/img/jpg/novaRiva-2.jpg",
      filetype: "img",
      filename: "Slika 2",
    },
    {
      imgUrl:
        "https://static.slobodnadalmacija.hr/images/slike/2021/12/28/20284362.jpg",
      filetype: "img",
      filename: "Slika 3",
    },
  ]);

  const imgFiletype = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 1.75V12.25H1.75V1.75H12.25ZM12.25 0.25H1.75C0.925 0.25 0.25 0.925 0.25 1.75V12.25C0.25 13.075 0.925 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V1.75C13.75 0.925 13.075 0.25 12.25 0.25ZM8.605 6.895L6.355 9.7975L4.75 7.855L2.5 10.75H11.5L8.605 6.895Z"
        fill="#7A9EFF"
      />
    </svg>
  );

  const pdfFiletype = (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0.5H1.5C0.675 0.5 0.00750017 1.175 0.00750017 2L0 14C0 14.825 0.6675 15.5 1.4925 15.5H10.5C11.325 15.5 12 14.825 12 14V5L7.5 0.5ZM1.5 14V2H6.75V5.75H10.5V14H1.5Z"
        fill="#FF5C72"
      />
    </svg>
  );

  const detailsVariants = {
    open: { opacity: 1, x: 0, width: "35%" },
    closed: { opacity: 0, x: "100%" },
  };

  useEffect(() => {
    setOpen(opened);
  }, [opened]);

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteActivity(activity.id));
    setOpen(false);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    dispatch(setActiveActivity(null));
    setOpen(false);
  };

  return (
    <motion.div
      className={styles.act_details}
      animate={open ? "open" : "closed"}
      transition={{ duration: 0.2 }}
      variants={detailsVariants}
      style={{ backgroundColor: bgColor, color: mainFontColor }}
    >
      <div className={styles.details_top}>
        <div className={styles.details_top_text}>
          <h1>{activity.title}</h1>
          <p>
            {activity.author} • {activity.date} • {activity.time}
          </p>
        </div>
        <div className={styles.details_top_icons}>
          <motion.div
            onClick={handleDelete}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 1 }}
            className={styles.delete}
          >
            <h1>Otkaži angažman</h1>
          </motion.div>

          <motion.svg
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 1 }}
            className={styles.share}
            width="18"
            height="20"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06ZM11.5 2C11.9125 2 12.25 2.3375 12.25 2.75C12.25 3.1625 11.9125 3.5 11.5 3.5C11.0875 3.5 10.75 3.1625 10.75 2.75C10.75 2.3375 11.0875 2 11.5 2ZM2.5 8.75C2.0875 8.75 1.75 8.4125 1.75 8C1.75 7.5875 2.0875 7.25 2.5 7.25C2.9125 7.25 3.25 7.5875 3.25 8C3.25 8.4125 2.9125 8.75 2.5 8.75ZM11.5 14.015C11.0875 14.015 10.75 13.6775 10.75 13.265C10.75 12.8525 11.0875 12.515 11.5 12.515C11.9125 12.515 12.25 12.8525 12.25 13.265C12.25 13.6775 11.9125 14.015 11.5 14.015Z"
              fill={iconColor}
            />
          </motion.svg>
          <motion.svg
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
            className={styles.close}
            style={{ width: "0.8rem" }}
            onClick={handleClose}
            width="14"
            height="14"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.72517 0.282546C9.65578 0.213018 9.57336 0.157857 9.48263 0.120211C9.3919 0.0825852 9.29464 0.0632125 9.19642 0.0632125C9.09819 0.0632125 9.00093 0.0825852 8.9102 0.120211C8.81947 0.157857 8.73705 0.213018 8.66767 0.282546L5.00017 3.94255L1.33267 0.275045C1.26323 0.205609 1.1808 0.150529 1.09008 0.11295C0.999352 0.0753716 0.902116 0.0560303 0.803918 0.0560303C0.70572 0.0560303 0.608483 0.0753716 0.51776 0.11295C0.427037 0.150529 0.344604 0.205609 0.275168 0.275045C0.205731 0.344482 0.150651 0.426915 0.113072 0.517638C0.0754937 0.608361 0.0561523 0.705598 0.0561523 0.803796C0.0561523 0.901994 0.0754937 0.99923 0.113072 1.08995C0.150651 1.18068 0.205731 1.26311 0.275168 1.33255L3.94267 5.00005L0.275168 8.66754C0.205731 8.73698 0.150651 8.81941 0.113072 8.91014C0.0754937 9.00086 0.0561523 9.0981 0.0561523 9.19629C0.0561523 9.29449 0.0754937 9.39173 0.113072 9.48245C0.150651 9.57318 0.205731 9.65561 0.275168 9.72504C0.344604 9.79448 0.427037 9.84956 0.51776 9.88714C0.608483 9.92472 0.70572 9.94406 0.803918 9.94406C0.902116 9.94406 0.999352 9.92472 1.09008 9.88714C1.1808 9.84956 1.26323 9.79448 1.33267 9.72504L5.00017 6.05754L8.66767 9.72504C8.7371 9.79448 8.81954 9.84956 8.91026 9.88714C9.00098 9.92472 9.09822 9.94406 9.19642 9.94406C9.29461 9.94406 9.39185 9.92472 9.48257 9.88714C9.5733 9.84956 9.65573 9.79448 9.72517 9.72504C9.7946 9.65561 9.84968 9.57318 9.88726 9.48245C9.92484 9.39173 9.94418 9.29449 9.94418 9.19629C9.94418 9.0981 9.92484 9.00086 9.88726 8.91014C9.84968 8.81941 9.7946 8.73698 9.72517 8.66754L6.05767 5.00005L9.72517 1.33255C10.0102 1.04755 10.0102 0.567546 9.72517 0.282546Z"
              fill={iconColor}
            />
          </motion.svg>
        </div>
      </div>
      <div className={styles.details_desc}>
        <h6 style={{ color: categoryFontColor }}>OPIS</h6>
        <p style={{ color: secondaryFontColor }}>{activity.description}</p>
      </div>
      <div className={styles.details_desc}>
        <h6 style={{ color: categoryFontColor }}>OCJENA POSLODAVCA</h6>
        <p style={{ color: "orange" }}>4,7</p>
      </div>
      <div className={styles.details_desc}>
        <h6 style={{ color: categoryFontColor }}>CIJENA</h6>
        <p style={{ color: "green" }}>{activity.price}</p>
      </div>
      <div className={styles.details_attach}>
        <h6 style={{ color: categoryFontColor }}>SLIKE</h6>
        <div className={styles.details_imgs}>
          {imgs.map((img, i) => (
            <div
              key={i}
              className={styles.details_img}
              style={{ border: `1.8px solid ${borderColor}` }}
            >
              <img
                className={styles.details_img_main}
                src={img.imgUrl}
                alt="details"
              />
              <div className={styles.details_img_details}>
                {img.filetype === "img" ? imgFiletype : pdfFiletype}
                <p style={{ color: secondaryFontColor }}>{img.filename}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ActivityDetails;
