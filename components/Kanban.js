/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Kanban.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAddress } from "../redux/actions/infoActions";

import "simplebar/src/simplebar.css";

import SimpleBar from "simplebar-react";

export default function Kanban() {
  const name = useSelector((state) => state.info.name);
  const address = useSelector((state) => state.info.address);

  const dispatch = useDispatch();

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

  const Tasks = [
    {
      id: "zjrzgd",
      title: "Marina Zadar",
      progress: "Not started",
      description: "Tražimo vozača dostupnog u 19:30",
      startDate: "11/03/2022",
      endDate: "13/03/2022",
      price: "600",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "!!",
      phase: "Jahta",
      subphase: [],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "http://arsenalzadar.com/wp-content/uploads/2015/10/mice-arsenal16.jpg",       
          filetype: "img",
          filename: "Slika 1",
        },
        {
          imgUrl:
            "https://arsenalzadar.com/wp-content/uploads/2017/03/web_13-2.jpg",       
          filetype: "img",
          filename: "Slika 2",
        },
        {
          imgUrl:
            "https://croatia.hr/sites/default/files/styles/image_full_width/public/2019-01/slike_14_arsenal_zadar_filip_brala_0.jpg?itok=NTINL-sm",       
          filetype: "img",
          filename: "Slika 3",
        },
      ],
    },
    {
      id: "dadbf",
      title: "Pirovac",
      progress: "In Progress",
      description: "Tražimo iskusnog vozača",
      startDate: "12/03/2022",
      endDate: "15/03/2022",
      price: "560",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "!!",
  phase: "Gliser",
      subphase: [],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "http://arsenalzadar.com/wp-content/uploads/2015/10/mice-arsenal16.jpg",       
          filetype: "img",
          filename: "Slika 1",
        },
        {
          imgUrl:
            "https://arsenalzadar.com/wp-content/uploads/2017/03/web_13-2.jpg",       
          filetype: "img",
          filename: "Slika 2",
        },
        {
          imgUrl:
            "https://croatia.hr/sites/default/files/styles/image_full_width/public/2019-01/slike_14_arsenal_zadar_filip_brala_0.jpg?itok=NTINL-sm",       
          filetype: "img",
          filename: "Slika 3",
        },
      ],
    },
    {
      id: "984367a",
      title: "Plaža Karin",
      progress: "In Progress",
      description: "Tražimo Jahta Vozača za nastup 05.13",
      startDate: "16/03/2022",
      endDate: "21/03/2022",
      price: "1200",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "!",
      phase: "Jahta",
      subphase: [],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "http://arsenalzadar.com/wp-content/uploads/2015/10/mice-arsenal16.jpg",       
          filetype: "img",
          filename: "Slika 1",
        },
        {
          imgUrl:
            "https://arsenalzadar.com/wp-content/uploads/2017/03/web_13-2.jpg",       
          filetype: "img",
          filename: "Slika 2",
        },
        {
          imgUrl:
            "https://croatia.hr/sites/default/files/styles/image_full_width/public/2019-01/slike_14_arsenal_zadar_filip_brala_0.jpg?itok=NTINL-sm",       
          filetype: "img",
          filename: "Slika 3",
        },
      ],
    },
    {
      id: "bbcsdg",
      title: "Maslenica",
      progress: "Done",
      description: "Treba nam kvalitetan vozač ",
      startDate: "03/03/2022",
      endDate: "05/03/2022",
      price: "700",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "None",
  phase: "Gliser",
      subphase: [],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "http://arsenalzadar.com/wp-content/uploads/2015/10/mice-arsenal16.jpg",       
          filetype: "img",
          filename: "Slika 1",
        },
        {
          imgUrl:
            "https://arsenalzadar.com/wp-content/uploads/2017/03/web_13-2.jpg",       
          filetype: "img",
          filename: "Slika 2",
        },
        {
          imgUrl:
            "https://croatia.hr/sites/default/files/styles/image_full_width/public/2019-01/slike_14_arsenal_zadar_filip_brala_0.jpg?itok=NTINL-sm",       
          filetype: "img",
          filename: "Slika 3",
        },
      ],
    },
  ];

  const [tags, setTags] = useState(["Excavation", "Layout", "Subphase"]);

  const [details, setDetails] = useState({});

  const [view, setView] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const [edit, setEdit] = useState(false);

  const [editDetails, setEditDetails] = useState(false);

  const [newName, setNewName] = useState(name);

  const [newAddress, setNewAddress] = useState(address);

  const [image, setImage] = useState(null);

  const [activeSwitch, setActiveSwitch] = useState("left");

  const [id, setId] = useState(null);

  const [tasks, updateTasks] = useState(Tasks);

  const columnsFromBackend = {
    notStartedTasks: {
      name: "Not started",
      items: tasks.filter((task) => task.progress === "Not started"),
    },
    inProgressTasks: {
      name: "In Progress",
      items: tasks.filter((task) => task.progress === "In Progress"),
    },
    doneTasks: {
      name: "Done",
      items: tasks.filter((task) => task.progress === "Done"),
    },
  };

  const [columns, setColumns] = useState(columnsFromBackend);

  const handleOnDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      if (destination.droppableId === "notStartedTasks") {
        removed.progress = "Not started";
      } else if (destination.droppableId === "inProgressTasks") {
        removed.progress = "In Progress";
      } else {
        removed.progress = "Done";
      }
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const open = (task, key) => {
    console.log(task);
    setDetails(task);
    setView(true);
    setId(key);
  };

  const save = () => {
    dispatch(changeName(newName));
    dispatch(changeAddress(newAddress));
    setEdit(false);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(() => {
        setIsClosing(false);
      }, 250);

      return () => clearTimeout(timeout);
    }
  }, [isClosing]);

  const detailVariants = {
    open: { opacity: 1, x: 0, width: "38rem" },
    closing: { opacity: 0, x: "100%" },
    closed: { display: "none" },
  };

  const editVariants = {
    open: { height: "10rem" },
    closed: { height: "7rem" },
  };

  const switchVariants = {
    left: { x: 0 },
    right: { x: "100%" },
  };

  const deleteTag = (name) => {
    const newTags = tags.filter((tag) => tag !== name);

    setTags(newTags);
  };

  useEffect(() => {}, [columns]);

  return (
    <div className={styles.kanban}>
      <motion.div
        animate={view ? "open" : isClosing ? "closing" : "closed"}
        transition={{ duration: 0.2 }}
        variants={detailVariants}
        className={styles.details}
        id="details"
      >
        {details.checklist && (
          <div className={styles.dHeader}>
            <div className={styles.subheader}>
              <h1>
                {details.title}‏‏‎ ‎‏‏‎ ‎‏‏‎‎
                {details.priority !== "None" && (
                  <strong
                    style={
                      details.priority === "!!"
                        ? { color: "#FF5C72" }
                        : { color: "#FDA076" }
                    }
                  >
                    {details.priority}
                  </strong>
                )}
              </h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "1rem",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setView(false);
                    setIsClosing(true);
                  }}
                >
                  <path
                    d="M9.72504 0.2825C9.65566 0.212972 9.57324 0.157812 9.48251 0.120175C9.39178 0.0825394 9.29452 0.0631667 9.19629 0.0631667C9.09807 0.0631667 9.00081 0.0825394 8.91008 0.120175C8.81935 0.157812 8.73693 0.212972 8.66754 0.2825L5.00005 3.9425L1.33255 0.275C1.26311 0.205563 1.18068 0.150483 1.08995 0.112905C0.99923 0.0753258 0.901994 0.0559845 0.803796 0.0559845C0.705598 0.0559845 0.608361 0.0753258 0.517638 0.112905C0.426915 0.150483 0.344482 0.205563 0.275045 0.275C0.205609 0.344436 0.150529 0.426869 0.11295 0.517592C0.0753716 0.608315 0.0560303 0.705552 0.0560303 0.80375C0.0560303 0.901948 0.0753716 0.999184 0.11295 1.08991C0.150529 1.18063 0.205609 1.26306 0.275045 1.3325L3.94255 5L0.275045 8.6675C0.205609 8.73693 0.150529 8.81937 0.11295 8.91009C0.0753716 9.00081 0.0560303 9.09805 0.0560303 9.19625C0.0560303 9.29445 0.0753716 9.39168 0.11295 9.48241C0.150529 9.57313 0.205609 9.65556 0.275045 9.725C0.344482 9.79443 0.426915 9.84951 0.517638 9.88709C0.608361 9.92467 0.705598 9.94401 0.803796 9.94401C0.901994 9.94401 0.99923 9.92467 1.08995 9.88709C1.18068 9.84951 1.26311 9.79443 1.33255 9.725L5.00005 6.0575L8.66754 9.725C8.73698 9.79443 8.81941 9.84951 8.91014 9.88709C9.00086 9.92467 9.0981 9.94401 9.19629 9.94401C9.29449 9.94401 9.39173 9.92467 9.48245 9.88709C9.57318 9.84951 9.65561 9.79443 9.72504 9.725C9.79448 9.65556 9.84956 9.57313 9.88714 9.48241C9.92472 9.39168 9.94406 9.29445 9.94406 9.19625C9.94406 9.09805 9.92472 9.00081 9.88714 8.91009C9.84956 8.81937 9.79448 8.73693 9.72504 8.6675L6.05754 5L9.72504 1.3325C10.01 1.0475 10.01 0.5675 9.72504 0.2825Z"
                    fill="#181D32"
                    fillOpacity="0.7"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.headerBody}>
              <div className={styles.dRow}>
                <div className={styles.dCategory}>OPIS</div>
                <div className={styles.dText}>
                  {details && details.description}
                </div>
              </div>
              <div className={styles.dRow}>
                <div className={styles.dCategory}>VREMENSKI OKVIR</div>
                <div className={styles.dText}>
                  {details && details.startDate} - {details && details.endDate}
                </div>
              </div>
              <div className={styles.dRow}>
                <div className={styles.dCategory}>TIP BRODA</div>
                <div className={styles.dProgress}>
                  <h1
                    className={styles.priority}
                    style={{
                      backgroundColor: "#7A9EFF",
                      marginRight: "0.25rem",
                    }}
                  >
                    {details && details.phase}
                  </h1>
                </div>
              </div>
              {editDetails && (
                <div className={styles.dRow}>
                  <div className={styles.dCategory}>PRIORITET</div>
                  <div className={styles.dProgress}>
                    <h1
                      className={styles.priority}
                      style={{ backgroundColor: "#C67AFF" }}
                    >
                      {details && details.priority}
                    </h1>
                  </div>
                </div>
              )}
              <div className={styles.dRow}>
                <div className={styles.dCategory}>SLIKE</div>
                <div className={styles.details_imgs}>
                  {details.attachments.map((img, i) => (
                    <div key={i} className={styles.details_img}>
                      <img
                        className={styles.details_img_main}
                        src={img.imgUrl}
                        alt="details"
                      />
                      <div className={styles.details_img_details}>
                        {img.filetype === "img" ? imgFiletype : pdfFiletype}
                        <p>{img.filename}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      {edit && <div className={styles.fade}></div>}
      <motion.div
        animate={edit ? "open" : "closed"}
        transition={{ duration: 0.2 }}
        variants={editVariants}
        className={styles.picture}
      >
        <div className={styles.pictureText}>
          <div className={styles.pictureRow}>
            {edit && <div className={styles.editTitles}>Name</div>}
            {edit ? (
              <input
                type="text"
                defaultValue={name}
                className={styles.pictureNameInput}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <h1 className={styles.pictureName}>Pronađi angažman</h1>
            )}
          </div>
          <div className={styles.pictureRow}>
            {edit && <div className={styles.editTitles}>Address</div>}
            {edit ? (
              <input
                type="text"
                defaultValue={address}
                className={styles.pictureAddressInput}
                onChange={(e) => setNewAddress(e.target.value)}
              />
            ) : (
              <h1 className={styles.pictureAddress}>{address}</h1>
            )}
          </div>
        </div>
        {edit && (
          <div className={styles.fileContainer}>
            <label className={styles.fileLabel} htmlFor="upload">
              <svg
                width="18"
                height="16"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6225 2H14C14.825 2 15.5 2.675 15.5 3.5V12.5C15.5 13.325 14.825 14 14 14H2C1.175 14 0.5 13.325 0.5 12.5V3.5C0.5 2.675 1.175 2 2 2H5.3775L5.56152 1.25899C5.67225 0.813078 6.07259 0.5 6.53204 0.5H9.46796C9.92741 0.5 10.3277 0.813078 10.4385 1.25899L10.6225 2ZM2 12.5H14V3.5H2V12.5Z"
                  fill="white"
                />
                <path
                  d="M8 10.25C6.7625 10.25 5.75 9.2375 5.75 8C5.75 6.7625 6.7625 5.75 8 5.75C9.2375 5.75 10.25 6.7625 10.25 8C10.25 9.2375 9.2375 10.25 8 10.25Z"
                  fill="white"
                />
              </svg>
            </label>
            {image && <h3>{image.name}</h3>}
            <input
              id="upload"
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </div>
        )}
        {edit ? (
          <div className={styles.editButtons}>
            <h1 className={styles.cancel} onClick={() => setEdit(false)}>
              Cancel
            </h1>
            <div className={styles.save} onClick={save}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 0.25H1.75C1.35218 0.25 0.970644 0.408035 0.68934 0.68934C0.408035 0.970644 0.25 1.35218 0.25 1.75V12.25C0.25 12.6478 0.408035 13.0294 0.68934 13.3107C0.970644 13.592 1.35218 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V3.25L10.75 0.25ZM12.25 12.25H1.75V1.75H10.1275L12.25 3.8725V12.25ZM7 7C5.755 7 4.75 8.005 4.75 9.25C4.75 10.495 5.755 11.5 7 11.5C8.245 11.5 9.25 10.495 9.25 9.25C9.25 8.005 8.245 7 7 7ZM2.5 4C2.5 3.17157 3.17157 2.5 4 2.5H7.75C8.57843 2.5 9.25 3.17157 9.25 4C9.25 4.82843 8.57843 5.5 7.75 5.5H4C3.17157 5.5 2.5 4.82843 2.5 4Z"
                  fill="white"
                />
              </svg>
              <h1 className={styles.saveText}>Save</h1>
            </div>
          </div>
        ) : null}
      </motion.div>
      <div className={styles.search}>
        <div className={styles.searchRow}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Pretraži angažman..." />
            <div className={styles.searchIcon}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.625 8.5H9.0325L8.8225 8.2975C9.29121 7.75297 9.63377 7.11158 9.82566 6.41921C10.0176 5.72684 10.054 5.00061 9.9325 4.2925C9.58 2.2075 7.84 0.542496 5.74 0.287496C5.00171 0.194096 4.25184 0.270825 3.54777 0.511813C2.84369 0.752801 2.20408 1.15166 1.67787 1.67787C1.15166 2.20408 0.752801 2.84369 0.511813 3.54777C0.270825 4.25184 0.194096 5.00171 0.287496 5.74C0.542496 7.84 2.2075 9.58 4.2925 9.9325C5.00061 10.054 5.72684 10.0176 6.41921 9.82566C7.11158 9.63377 7.75297 9.29121 8.2975 8.8225L8.5 9.0325V9.625L11.6875 12.8125C11.995 13.12 12.4975 13.12 12.805 12.8125C13.1125 12.505 13.1125 12.0025 12.805 11.695L9.625 8.5ZM5.125 8.5C3.2575 8.5 1.75 6.9925 1.75 5.125C1.75 3.2575 3.2575 1.75 5.125 1.75C6.9925 1.75 8.5 3.2575 8.5 5.125C8.5 6.9925 6.9925 8.5 5.125 8.5Z"
                  fill="#181D32"
                  fillOpacity="0.7"
                />
              </svg>
            </div>
          </div>
          <div className={styles.filter}>
            <select name="filter" id="filter">
              <option value="relevance">Sortiraj: Ocjena</option>
              <option value="az">Sortiraj: A - Z</option>
              <option value="za">Sortiraj: Z - A</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.firstDisplay}>
        <div className={styles.container}>
          <ul className={styles.addTask}>
            {Tasks.map((task, index) => (
              // eslint-disable-next-line react/jsx-key
              <li
                className={
                  view === true
                    ? id === task.id
                      ? `${styles.blue} ${styles.taskContainer}`
                      : styles.taskContainer
                    : styles.taskContainer
                }
                onClick={() => open(task, task.id)}
                key={task.id}
              >
                <div className={styles.taskHeader}>
                  <div>
                    <h1 className={styles.taskTitle}>
                      {task.title}‏‏‎ ‎‏‏‎ ‎
                      {task.priority !== "None" && (
                        <strong
                          style={
                            task.priority === "!!"
                              ? {
                                  color: "#FF5C72",
                                  fontSize: "24px",
                                }
                              : {
                                  color: "#FDA076",
                                  fontSize: "18px",
                                }
                          }
                        >
                          {task.priority}
                        </strong>
                      )}
                    </h1>
                  </div>
                  <div className={styles.headerInfo}>
                    <div style={{ display: "flex" }}>
                      <div className={styles.box}>
                        <h1>Pošalji zahtjev</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.taskBody}>
                  <h1>{task.description}</h1>
                  <div className={styles.calendar}>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2.25H13.25V1.5C13.25 1.0875 12.9125 0.75 12.5 0.75C12.0875 0.75 11.75 1.0875 11.75 1.5V2.25H4.25V1.5C4.25 1.0875 3.9125 0.75 3.5 0.75C3.0875 0.75 2.75 1.0875 2.75 1.5V2.25H2C1.175 2.25 0.5 2.925 0.5 3.75V15.75C0.5 16.575 1.175 17.25 2 17.25H14C14.825 17.25 15.5 16.575 15.5 15.75V3.75C15.5 2.925 14.825 2.25 14 2.25ZM13.25 15.75H2.75C2.3375 15.75 2 15.4125 2 15V6H14V15C14 15.4125 13.6625 15.75 13.25 15.75Z"
                        fill="#181D32"
                        fillOpacity="0.7"
                      />
                    </svg>
                    <h1 className={styles.date}>
                      {task.startDate} - {task.endDate}
                    </h1>
                  </div>
                  <div className={styles.footer}>
                    <div className={styles.price}>
                      Naknada: {task.price} HRK
                    </div>
                    <div className={styles.actions}>
                      <div className={styles.action}>
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 4.875C1.3775 4.875 0.875 5.3775 0.875 6C0.875 6.6225 1.3775 7.125 2 7.125C2.6225 7.125 3.125 6.6225 3.125 6C3.125 5.3775 2.6225 4.875 2 4.875ZM2 0.375C1.3775 0.375 0.875 0.8775 0.875 1.5C0.875 2.1225 1.3775 2.625 2 2.625C2.6225 2.625 3.125 2.1225 3.125 1.5C3.125 0.8775 2.6225 0.375 2 0.375ZM2 9.375C1.3775 9.375 0.875 9.885 0.875 10.5C0.875 11.115 1.385 11.625 2 11.625C2.615 11.625 3.125 11.115 3.125 10.5C3.125 9.885 2.6225 9.375 2 9.375ZM5 11.25H14C14.4125 11.25 14.75 10.9125 14.75 10.5C14.75 10.0875 14.4125 9.75 14 9.75H5C4.5875 9.75 4.25 10.0875 4.25 10.5C4.25 10.9125 4.5875 11.25 5 11.25ZM5 6.75H14C14.4125 6.75 14.75 6.4125 14.75 6C14.75 5.5875 14.4125 5.25 14 5.25H5C4.5875 5.25 4.25 5.5875 4.25 6C4.25 6.4125 4.5875 6.75 5 6.75ZM4.25 1.5C4.25 1.9125 4.5875 2.25 5 2.25H14C14.4125 2.25 14.75 1.9125 14.75 1.5C14.75 1.0875 14.4125 0.75 14 0.75H5C4.5875 0.75 4.25 1.0875 4.25 1.5Z"
                            fill="#181D32"
                            fillOpacity="0.7"
                          />
                        </svg>
                        <h1>3</h1>
                      </div>
                      <div className={styles.action}>
                        <svg
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.2753 1.93652C9.7757 1.93652 9.29655 2.13499 8.94326 2.48828L2.89547 8.53607C2.29522 9.13632 1.95801 9.95043 1.95801 10.7993C1.95801 11.6482 2.29522 12.4623 2.89547 13.0625C3.49572 13.6628 4.30983 14 5.15871 14C6.00759 14 6.8217 13.6628 7.42195 13.0625L13.4697 7.01475C13.7626 6.72186 14.2375 6.72186 14.5304 7.01475C14.8233 7.30764 14.8233 7.78252 14.5304 8.07541L8.4826 14.1232C7.60105 15.0048 6.40541 15.5 5.15871 15.5C3.912 15.5 2.71636 15.0048 1.83481 14.1232C0.953259 13.2416 0.458008 12.046 0.458008 10.7993C0.458008 9.5526 0.953259 8.35696 1.83481 7.47541L7.8826 1.42762C8.51719 0.79303 9.37787 0.436523 10.2753 0.436523C11.1728 0.436523 12.0334 0.79303 12.668 1.42762C13.3026 2.0622 13.6591 2.92288 13.6591 3.82032C13.6591 4.71776 13.3026 5.57845 12.668 6.21303L6.61365 12.2608C6.22603 12.6484 5.7003 12.8662 5.15213 12.8662C4.60395 12.8662 4.07823 12.6484 3.69061 12.2608C3.30299 11.8732 3.08523 11.3475 3.08523 10.7993C3.08523 10.2511 3.30299 9.7254 3.69061 9.33779L9.27805 3.75692C9.57112 3.4642 10.046 3.46448 10.3387 3.75755C10.6314 4.05061 10.6312 4.52548 10.3381 4.8182L4.75127 10.3984C4.64515 10.5047 4.58523 10.6491 4.58523 10.7993C4.58523 10.9497 4.64495 11.0938 4.75127 11.2002C4.85758 11.3065 5.00178 11.3662 5.15213 11.3662C5.30248 11.3662 5.44667 11.3065 5.55299 11.2002L11.6074 5.15237C11.6075 5.15228 11.6073 5.15247 11.6074 5.15237C11.9605 4.79912 12.1591 4.3198 12.1591 3.82032C12.1591 3.32071 11.9606 2.84156 11.6074 2.48828C11.2541 2.13499 10.7749 1.93652 10.2753 1.93652Z"
                            fill="#181D32"
                            fillOpacity="0.7"
                          />
                        </svg>
                        <h1>8</h1>
                      </div>
                      <div className={styles.action}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.54275 14.4995L1.868 10.5252L1.865 10.52C1.46975 9.63575 1.25 8.6555 1.25 7.625C1.25 3.69275 4.44275 0.5 8.375 0.5C12.3073 0.5 15.5 3.69275 15.5 7.625C15.5 11.5573 12.3073 14.75 8.375 14.75C7.3445 14.75 6.365 14.5303 5.47775 14.135L5.47475 14.1343C4.55825 14.438 1.721 15.3838 1.5005 15.4573C1.4225 15.485 1.33775 15.5 1.25 15.5C0.836 15.5 0.5 15.164 0.5 14.75C0.5 14.6622 0.515 14.5775 0.54275 14.4995ZM8.375 2C11.4792 2 14 4.52075 14 7.625C14 10.7292 11.4792 13.25 8.375 13.25C7.562 13.25 6.78875 13.0775 6.0905 12.7662C5.75225 12.6117 5.36075 12.5915 5.0015 12.7108C4.487 12.8818 3.3605 13.256 2.43575 13.5643L3.29075 10.9985C3.41075 10.6385 3.38975 10.247 3.23225 9.90275C2.9225 9.2105 2.75 8.438 2.75 7.625C2.75 4.52075 5.27075 2 8.375 2Z"
                            fill="#181D32"
                            fillOpacity="0.7"
                          />
                        </svg>
                        <h1>8</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
