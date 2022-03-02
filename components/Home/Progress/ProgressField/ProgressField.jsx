import React, { useState, useEffect } from "react";
import styles from "../../../../styles/ProgressField.module.scss";

import ProgressBar from "@ramonak/react-progress-bar";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../../../redux/actions/colormodeActions";

function ProgressField({ field }) {
  const [renderChildren, setRenderChildren] = useState(false);
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);

  const [fontColor, setFontColor] = useState("#5e6170");
  const [progressBgColor, setProgressBgColor] = useState("#dfe8ff");
  const [childProgressBgColor, setChildProgressBgColor] = useState("#f2dfff");

  useEffect(() => {
    if (colormode === "light") {
      setProgressBgColor("#dfe8ff");
      setChildProgressBgColor("#f2dfff");
      setFontColor("#5e6170");
    } else {
      setProgressBgColor("#434d68");
      setChildProgressBgColor("#554468");
      setFontColor("#a0a0a3");
    }
  }, [colormode]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(field.progress);
    }, 200);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.progressField}>
      <div className={styles.parent}>
        <div
          className={styles.title}
          onClick={() => setRenderChildren(!renderChildren)}
          style={{
            cursor:
              field.children && field.children.length > 0
                ? "pointer"
                : "default",
          }}
        >
          <h5 style={{ marginLeft: field.isChild && "1em" }}>{field.title}</h5>
          {field.children && field.children.length > 0 && (
            <svg
              width="13"
              height="9"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.09 0.967551L5 3.87755L7.91 0.967551C7.97943 0.898114 8.06187 0.843035 8.15259 0.805456C8.24331 0.767877 8.34055 0.748535 8.43875 0.748535C8.53694 0.748535 8.63418 0.767877 8.7249 0.805456C8.81563 0.843035 8.89806 0.898114 8.9675 0.967551C9.03693 1.03699 9.09201 1.11942 9.12959 1.21014C9.16717 1.30087 9.18651 1.3981 9.18651 1.4963C9.18651 1.5945 9.16717 1.69173 9.12959 1.78246C9.09201 1.87318 9.03693 1.95561 8.9675 2.02505L5.525 5.46755C5.45561 5.53708 5.3732 5.59224 5.28247 5.62988C5.19174 5.66751 5.09447 5.68688 4.99625 5.68688C4.89802 5.68688 4.80076 5.66751 4.71003 5.62988C4.6193 5.59224 4.53688 5.53708 4.4675 5.46755L1.025 2.02505C0.955469 1.95567 0.900309 1.87325 0.862672 1.78252C0.825036 1.69179 0.805664 1.59453 0.805664 1.4963C0.805664 1.39807 0.825036 1.30081 0.862672 1.21008C0.900309 1.11935 0.955469 1.03694 1.025 0.967551C1.3175 0.682551 1.7975 0.675051 2.09 0.967551Z"
                fill={fontColor}
              />
            </svg>
          )}
        </div>
        <div
          className={`${styles.bar} ${
            field.progress === 100 && styles.barFull
          }`}
        >
          <p>{field.progress}%</p>
          <ProgressBar
            completed={progress}
            isLabelVisible={false}
            bgColor={field.isChild ? "#c67aff" : "#7a9eff"}
            baseBgColor={field.isChild ? childProgressBgColor : progressBgColor}
            width={"35em"}
            height={"0.55em"}
          />
        </div>
      </div>
      <div className={styles.children}>
        {field.children &&
          renderChildren &&
          field.children.map((child, i) => (
            <ProgressField field={{ ...child, isChild: true }} key={i} />
          ))}
      </div>
    </div>
  );
}

export default ProgressField;
