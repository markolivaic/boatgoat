import React, { useState, useEffect } from "react";
import styles from "../../../../styles/Activity.module.scss";

import { motion } from "framer-motion";

import { useDetectClickOutside } from "react-detect-click-outside";

import {
  deleteActivity,
  setActiveActivity,
} from "../../../../redux/actions/activityActions";
import { switchColormode } from "../../../../redux/actions/colormodeActions";
import { useDispatch, useSelector } from "react-redux";

function Activity({ activity, openedDetails }) {
  const dispatch = useDispatch();
  const activeActivity = useSelector((state) => state.activity.activeActivity);
  const colormode = useSelector((state) => state.color.colormode);

  const [isClicked, setIsClicked] = useState(false);
  const [day, setDay] = useState();
  const [time, setTime] = useState();

  const [mainFontColor, setMainFontColor] = useState("white");
  const [secondaryFontColor, setSecondaryFontColor] = useState("#747784");
  const [iconColor, setIconColor] = useState("#5e6170");
  const [clickedBgColor, setClickedBgColor] = useState("#eff4fe");
  const [borderColor, setBorderColor] = useState("#e3e4e6");

  useEffect(() => {
    if (colormode === "light") {
      setMainFontColor("black");
      setSecondaryFontColor("#747784");
      setIconColor("#5e6170");
      setClickedBgColor("#eff4fe");
      setBorderColor("#e3e4e6");
    } else {
      setMainFontColor("white");
      setSecondaryFontColor("#adadb0");
      setIconColor("#adadb0");
      setClickedBgColor("#333948");
      setBorderColor("#4b4b51");
    }
  }, [colormode]);

  useEffect(() => {
    if (!activeActivity || activity.id !== activeActivity.id)
      setIsClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeActivity]);

  const handleDelete = (e) => {
    e.stopPropagation();

    dispatch(deleteActivity(activity.id));

    setIsClicked(false);
  };

  const activateActivity = () => {
    setIsClicked(true);
    dispatch(setActiveActivity(activity));
  };

  return (
    <div
      className={`${styles.activity} ${
        isClicked ? styles.activity_clicked : ""
      }`}
      onClick={activateActivity}
      style={{
        borderTop: !activity.isFirst ? `1px solid ${borderColor}` : "",
        color: secondaryFontColor,
        backgroundColor: isClicked ? clickedBgColor : "transparent",
      }}
    >
      <div className={styles.top}>
        <div className={styles.top_details}>
          <h5 style={{ color: mainFontColor }}>{activity.title}</h5>
          <p>
            {activity.author} • {activity.date} • {activity.time}
          </p>
        </div>
        <div className={styles.top_icons}>
          <motion.svg
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
            onClick={handleDelete}
            className={styles.delete}
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.65015 2L5.35015 2.00001C5.19102 2.00001 5.0384 2.06322 4.92588 2.17575C4.81336 2.28827 4.75015 2.44088 4.75015 2.60001V3.50001H9.25015V2.6C9.25015 2.44087 9.18693 2.28826 9.07441 2.17574C8.96189 2.06321 8.80928 2 8.65015 2ZM10.7501 3.50001V2.6C10.7501 2.04305 10.5289 1.5089 10.1351 1.11508C9.74124 0.721249 9.2071 0.5 8.65014 0.5L5.35014 0.500009C4.79319 0.500009 4.25905 0.721258 3.86522 1.11508C3.4714 1.50891 3.25015 2.04305 3.25015 2.60001V3.50001H1C0.585786 3.50001 0.25 3.8358 0.25 4.25001C0.25 4.66422 0.585786 5.00001 1 5.00001H1.75015V13.4C1.75015 13.957 1.9714 14.4911 2.36522 14.8849C2.75905 15.2788 3.29319 15.5 3.85015 15.5H10.1501C10.7071 15.5 11.2412 15.2788 11.6351 14.8849C12.0289 14.4911 12.2501 13.957 12.2501 13.4V5.00001H13C13.4142 5.00001 13.75 4.66422 13.75 4.25001C13.75 3.8358 13.4142 3.50001 13 3.50001H10.7501ZM10.7501 5.00001H3.25015V13.4C3.25015 13.5591 3.31336 13.7118 3.42588 13.8243C3.5384 13.9368 3.69102 14 3.85015 14H10.1501C10.3093 14 10.4619 13.9368 10.5744 13.8243C10.6869 13.7118 10.7501 13.5591 10.7501 13.4V5.00001ZM5.5 6.5C5.91421 6.5 6.25 6.83579 6.25 7.25V11.75C6.25 12.1642 5.91421 12.5 5.5 12.5C5.08579 12.5 4.75 12.1642 4.75 11.75V7.25C4.75 6.83579 5.08579 6.5 5.5 6.5ZM8.5 6.5C8.91421 6.5 9.25 6.83579 9.25 7.25V11.75C9.25 12.1642 8.91421 12.5 8.5 12.5C8.08579 12.5 7.75 12.1642 7.75 11.75V7.25C7.75 6.83579 8.08579 6.5 8.5 6.5Z"
              fill={iconColor}
            />
          </motion.svg>

          <motion.svg
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
            onClick={(e) => {
              e.stopPropagation();
              console.log("share");
            }}
            className={styles.share}
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06ZM11.5 2C11.9125 2 12.25 2.3375 12.25 2.75C12.25 3.1625 11.9125 3.5 11.5 3.5C11.0875 3.5 10.75 3.1625 10.75 2.75C10.75 2.3375 11.0875 2 11.5 2ZM2.5 8.75C2.0875 8.75 1.75 8.4125 1.75 8C1.75 7.5875 2.0875 7.25 2.5 7.25C2.9125 7.25 3.25 7.5875 3.25 8C3.25 8.4125 2.9125 8.75 2.5 8.75ZM11.5 14.015C11.0875 14.015 10.75 13.6775 10.75 13.265C10.75 12.8525 11.0875 12.515 11.5 12.515C11.9125 12.515 12.25 12.8525 12.25 13.265C12.25 13.6775 11.9125 14.015 11.5 14.015Z"
              fill={iconColor}
            />
          </motion.svg>
        </div>
      </div>
      <p>{activity.description}</p>
      <div className={styles.money}>
        <svg
          stroke="currentColor"
          fill="green"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M200.4 27.39L180.9 183h42.8l49.1-146.57-72.4-9.04zm91.7 8L242.7 183l149.7.1 34.3-102.61-134.6-45.1zM180 46.03l-71.9 7.84L122.2 183h40.7L180 46.03zM64 153c-11.5 0-19.18 8.8-21.27 17.2-1.04 4.2-.45 7.6.73 9.5 1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30H64zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6.7-5.2 2.7-9.9 5.3-14.4h-39.8zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4 4.6-4.6 7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9L41 201zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23H384zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46h-61.3zm-9.7 16c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z"></path>
        </svg>
        <p>{activity.price}</p>
      </div>
    </div>
  );
}

export default Activity;
