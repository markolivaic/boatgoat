import React, { useState, useEffect } from "react";
import styles from "../../styles/Calendar.module.scss";

import CalendarNavbar from "./CalendarNavbar/CalendarNavbar";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../redux/actions/colormodeActions";

function Calendar() {
  const today = new Date();

  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);
  const user = useSelector((state) => state.info.user);

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

  const [monthIndex, setMonthIndex] = useState(today.getMonth());

  const relevantTasks = useSelector((state) => state.activity.activities);

  const allTasks = [];

  relevantTasks.map((task) => {
    console.log(task);
    if (user && task.type !== user.type) {
      allTasks.push(task);
      console.log(task);
    }
  });
  const tasks = [];

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

  const nextMonth = () => (monthIndex === 11 ? 0 : monthIndex + 1);
  const prevMonth = () => (monthIndex === 0 ? 11 : monthIndex - 1);

  function flatten(a) {
    return Array.isArray(a) ? [].concat.apply([], a.map(flatten)) : a;
  }

  const getDaysInMonth = () => {
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const getFirstDay = () => {
    return new Date(year, monthIndex, 1).getDay();
  };

  const getTaskPosition = (task, i) => {
    // Check task position and taken days
    let takenRangePairs = [];
    let currRangePair = [task.startDay, task.endDay];
    let count = 0;

    tasks.forEach((taskTemp) => {
      if (!taskTemp.isRemainder) {
        const taskRange = [taskTemp.startDay, taskTemp.endDay];
        takenRangePairs.push(taskRange);
      } else {
        takenRangePairs.push([2, 1]);
      }
    });

    takenRangePairs.slice(0, i).forEach((takenRangePair) => {
      if (
        (currRangePair[0] >= takenRangePair[0] &&
          currRangePair[0] < takenRangePair[1]) ||
        (currRangePair[1] >= takenRangePair[0] &&
          currRangePair[1] < takenRangePair[1])
      ) {
        count++;
      }
    });

    return count;
  };

  const [year, setYear] = useState(today.getFullYear());
  const [firstDay, setfirstDay] = useState(getFirstDay());
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth());
  const [month, setMonth] = useState([]);

  const updateMonth = (firstDay, daysInMonth) => {
    const days = [];

    // Push a few days from the end of last month to the start of the calendar if needed
    [...Array(firstDay).keys()].map((i) =>
      days.push(
        <div className={styles.day}>
          <p style={{ color: "rgba(0, 0, 0, 0.4)" }}>
            {getDaysInMonth(prevMonth(), year) - firstDay + i}
          </p>
        </div>
      )
    );

    // Push the current month days to calendar
    [...Array(daysInMonth).keys()].map((i) =>
      days.push(
        <div className={styles.day}>
          {i === today.getDate() - 1 &&
            monthIndex === today.getMonth() &&
            year === today.getFullYear() && (
              <div className={styles.today}>
                <p>
                  {i === 0
                    ? `${allMonths[monthIndex].substring(0, 3)} ${i + 1}`
                    : i + 1}
                </p>
              </div>
            )}
          <p
            style={{
              opacity: 1,
            }}
          >
            {i === 0
              ? `${allMonths[monthIndex].substring(0, 3)} ${i + 1}`
              : i + 1}
          </p>
        </div>
      )
    );

    // Push a few days from the start of next month to the end of the calendar if needed
    [...Array(42 - daysInMonth - firstDay).keys()].map((i) =>
      days.push(
        <div className={styles.day}>
          <p style={{ color: "rgba(0, 0, 0, 0.4)" }}>
            {`${allMonths[nextMonth()].substring(0, 3)} ${i + 1}`}
          </p>
        </div>
      )
    );

    setMonth(days);
  };

  const updateTasks = () => {
    allTasks.forEach((task) => {
      if (
        (task.startYear === year || task.endYear === year) &&
        ((task.startMonth === monthIndex &&
          task.startDay >= getDaysInMonth(prevMonth(), year) - firstDay) ||
          task.startMonth === monthIndex + 1 ||
          (task.startMonth === monthIndex + 2 &&
            task.startDay <= 42 - daysInMonth - firstDay))
      ) {
        tasks.push(task);
      }
    });
  };

  // Update current month calendar
  useEffect(() => {
    updateMonth(firstDay, daysInMonth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstDay, daysInMonth]);

  // Change first day and number of days in month values
  useEffect(() => {
    setfirstDay(getFirstDay());
    setDaysInMonth(getDaysInMonth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, monthIndex]);

  // Start updates
  useEffect(() => {
    // Update calendar to current month on start
    updateMonth(firstDay, daysInMonth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStartDay = (task) => {
    let startDay = task.startDay;

    // Task is from previous month
    if (task.startMonth === monthIndex) {
      const daysInPrevMonth = getDaysInMonth(prevMonth(), year);
      startDay = daysInPrevMonth - (daysInPrevMonth - firstDay) - firstDay;
      // Task is from next month
    } else if (task.startMonth === monthIndex + 2) {
      startDay = task.startDay + getDaysInMonth();
    }

    return startDay;
  };

  // Calculate left margin on a task
  const getMarginLeft = (task) => {
    if (!task) return;
    const multiplier = (getStartDay(task) + firstDay - 1) % 7;

    return `calc(100% / 7 * ${multiplier})`;
  };

  // Calculate top margin on a task
  const getMarginTop = (task, i) => {
    if (!task) return;
    let oneTileMargin = "87.5vh / 6";
    let skippedTileAmount = Math.floor((firstDay + getStartDay(task) - 1) / 7);
    let positionMargin = `${getTaskPosition(task, i)} * 3.2em`;

    return `calc(${oneTileMargin} * ${skippedTileAmount} + ${positionMargin})`;
  };

  const renderTask = (task, i, j) => {
    let borderRadius = null;
    let backgroundColor = "#4bc0fb";
    let opacity = 1;
    let rgbCode = "255, 255, 255,";

    // Change bg color and opacity if it is not from current month
    if (task.endMonth != monthIndex + 1 || task.startMonth != monthIndex + 1) {
      backgroundColor = "#ededef";
      opacity = 0.3;
      rgbCode = "0, 0, 0, ";
    }

    if (task.isRemainder) opacity = 0;

    // Change the border radius if it expands into other week
    if (task.expandsBackward && task.expandsForward) borderRadius = "0 0 0 0";
    else if (task.expandsBackward) borderRadius = "0 0.5em 0.5em 0";
    else if (task.expandsForward) borderRadius = "0.5em 0 0 0.5em";

    return (
      <div
        className={styles.task}
        key={i}
        style={{
          color: `rgba(${rgbCode} ${opacity})`,
          backgroundColor: backgroundColor,
          borderRadius: `${borderRadius != null ? borderRadius : "0.5em"}`,
          width: `calc(100% / 7 * ${task.endDay - task.startDay})`,
          marginTop: getMarginTop(task, j),
          marginLeft: getMarginLeft(task),
        }}
      >
        <h5>
          {task.title}, {task.author}
        </h5>
        <h6>{task.price}</h6>
      </div>
    );
  };

  const generateTask = (task) => {
    const width = task.endDay - task.startDay;
    const leftOffset = (task.startDay + firstDay - 1) % 7;

    // Check if the task expands beyond current month
    if (
      task.endMonth > monthIndex + 1 &&
      task.endDay - 1 + getDaysInMonth() + getFirstDay() > 42
    ) {
      return [
        {
          ...task,
          endDay: 43 - getDaysInMonth() - getFirstDay(),
          expandsForward: true,
        },
      ];
    }

    if (width + leftOffset > 7) {
      const newEndDay = task.startDay + (7 - leftOffset);

      const newTask = {
        ...task,
        endDay: newEndDay,
        expandsForward: true,
      };

      const remainderTask = {
        ...task,
        startDay: newEndDay,
        isRemainder: true,
        expandsBackward: true,
      };

      if (remainderTask.endDay - remainderTask.startDay <= 0) return [newTask];

      return [newTask, ...generateTask(remainderTask)];
    }

    return [
      {
        ...task,
        expandsForward: false,
      },
    ];
  };

  const renderTasks = () => {
    updateTasks();

    let newTasks = tasks.map((task) => {
      if (task.type) return generateTask(task);
    });

    newTasks = flatten(newTasks);

    let j = -1;

    return newTasks.map((task, i) => {
      if (!task.isRemainder) j++;
      return renderTask(task, i, j);
    });
  };

  return (
    <div className={styles.cal}>
      <CalendarNavbar
        parentCallback={(data) => {
          setYear(data.year);
          setMonthIndex(data.monthIndex);
        }}
      />
      <div className={styles.content}>
        <div className={styles.weekdays}>
          <p>Pon</p>
          <p>Uto</p>
          <p>Sri</p>
          <p>Čet</p>
          <p>Pet</p>
          <p>Sub</p>
          <p>Ned</p>
        </div>
        <div className={styles.month}>
          {month}
          <div className={styles.tasks}>{renderTasks()}</div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
