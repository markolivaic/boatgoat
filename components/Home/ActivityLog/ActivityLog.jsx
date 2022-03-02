import React, { useState, useEffect } from "react";
import styles from "../../../styles/ActivityLog.module.scss";
import "simplebar/src/simplebar.css";

import { useDetectClickOutside } from "react-detect-click-outside";

import SimpleBar from "simplebar-react";

import Activity from "./Activity/Activity";
import ActivityDetails from "./ActivityDetails/ActivityDetails";

import { useSelector, useDispatch } from "react-redux";
import { setActiveActivity } from "../../../redux/actions/activityActions";
import { switchColormode } from "../../../redux/actions/colormodeActions";

function ActivityLog() {
  const activities = useSelector((state) => state.activity.activities);
  const activeActivity = useSelector((state) => state.activity.activeActivity);
  const colormode = useSelector((state) => state.color.colormode);
  const user = useSelector((state) => state.info.user);
  const dispatch = useDispatch();

  const [detailsOpen, setDetailsOpen] = useState(false);

  const [bgColor, setBgColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const [borderColor, setBorderColor] = useState("#e0e0e0");

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("white");
      setFontColor("black");
      setBorderColor("#e0e0e0");
    } else {
      setBgColor("#323339");
      setFontColor("white");
      setBorderColor("#4b4b51");
    }
  }, [colormode]);

  useEffect(() => {
    if (!detailsOpen) {
      dispatch(setActiveActivity(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsOpen]);

  useEffect(() => {
    if (activeActivity) {
      setDetailsOpen(true);
    } else {
      setDetailsOpen(false);
    }
  }, [activeActivity]);

  const ref = useDetectClickOutside({
    onTriggered: () => setDetailsOpen(false),
  });

  return (
    <div
      className={styles.activities}
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      <div
        className={styles.title_top}
        style={{ borderBottom: `1px solid ${borderColor}` }}
      >
        <h5 onClick={() => setDetailsOpen(true)}>Predstojeći angažmani</h5>
      </div>
      <div className={styles.activities_holder} ref={ref}>
        <ActivityDetails
          opened={detailsOpen}
          closeDetails={() => setDetailsOpen(false)}
        />
        <SimpleBar
          style={{ maxHeight: activities.length <= 3 ? "40rem" : "36rem" }}
        >
          {activities.map((activity, i) => {
            if((user.type === "User" && activity.type === "Company") || (user.type === "Company" && activity.type === "User")) {
              return (
                <Activity
                key={activity.id}
                activity={{ ...activity, ...{ isFirst: i === 0 } }}
                openedDetails={(activity) => {
                  setDetailsOpen(true);
                  setActiveActivity(activity);
                }}
              />
              )
            }

            })}
        </SimpleBar>
      </div>
    </div>
  );
}

export default ActivityLog;
