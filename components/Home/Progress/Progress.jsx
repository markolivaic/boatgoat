import React, { useState, useEffect } from "react";
import styles from "../../../styles/Progress.module.scss";

import ProgressField from "./ProgressField/ProgressField";
import ProgressBarSplit from "./ProgressBarSplit/ProgressBarSplit";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../../redux/actions/colormodeActions";

function Progress() {
  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);

  const [bgColor, setBgColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("white");
      setFontColor("black");
    } else {
      setBgColor("#323339");
      setFontColor("white");
    }
  }, [colormode]);

  const progressFields = [
    {
      title: "Excavation",
      progress: 100,
      children: [
        {
          title: "Subphase",
          progress: 50,
        },
      ],
    },
    {
      title: "Foundation",
      progress: 65,
    },
    {
      title: "Framing",
      progress: 45,
    },
    {
      title: "Dry wall",
      progress: 25,
    },
    {
      title: "Trim",
      progress: 0,
    },
  ];

  return (
    <div
      className={styles.progress}
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      <div className={styles.top}>
        <div className={styles.topText}>
          <h5>48% complete</h5>
          <p>Progress</p>
        </div>
        <ProgressBarSplit progressProp={48} parts={4} />
        <div className={styles.topDates}>
          <p>01/01/21</p>
          <p>121 days remaining</p>
          <p>09/03/22</p>
        </div>
      </div>

      <div className={styles.bottom}>
        {progressFields.map((field, i) => (
          <ProgressField field={field} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Progress;
