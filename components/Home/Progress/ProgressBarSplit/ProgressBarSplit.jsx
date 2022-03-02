import React, { useEffect, useState } from "react";
import styles from "../../../../styles/ProgressBarSplit.module.scss";

import ProgressBar from "@ramonak/react-progress-bar";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../../../redux/actions/colormodeActions";

function ProgressBarSplit({ progressProp, parts }) {
  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);

  const [progressBgColor, setProgressBgColor] = useState("#dfe8ff");
  const [bgColor, setBgColor] = useState("white");

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("white");
      setProgressBgColor("#dfe8ff");
    } else {
      setBgColor("#323339");
      setProgressBgColor("#434d68");
    }
  }, [colormode]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(progressProp);
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.progressBarSplit}>
      <div
        className={`${styles.bar} ${progress === 100 ? styles.barFull : ""}`}
      >
        <ProgressBar
          completed={progress}
          isLabelVisible={false}
          bgColor="#7a9eff"
          baseBgColor={progressBgColor}
          width="100%"
          height={"0.55em"}
          margin={"1.5em 0 1em 0"}
        />
      </div>

      <div className={styles.lines}>
        {[...Array(parts + 1).keys()].map((i) =>
          i === 0 || i === parts ? (
            <div
              className={styles.line}
              style={{ backgroundColor: "transparent" }}
            ></div>
          ) : (
            <div
              className={styles.line}
              style={{ backgroundColor: bgColor }}
            ></div>
          )
        )}
      </div>
    </div>
  );
}

export default ProgressBarSplit;
