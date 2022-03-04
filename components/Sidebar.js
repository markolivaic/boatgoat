/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import styles from "../styles/Sidebar.module.scss";
import { BiHomeAlt, BiCalendarAlt } from "react-icons/bi";
import { BsListTask, BsMusicNoteBeamed } from "react-icons/bs";
import { useState, useEffect } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../redux/actions/colormodeActions";
import { logout } from "../redux/actions/infoActions";

import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);
  const user = useSelector((state) => state.info.user);

  const [active, setActive] = useState("");
  const [bgColor, setBgColor] = useState("#f5f6fa");
  const [fontColor, setFontColor] = useState("#5a5e6e");
  const [logoColor, setLogoColor] = useState("black");

  useEffect(() => {
    try {
      setActive(window.location.pathname);
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("#f5f6fa");
      setFontColor("#5a5e6e");
      setLogoColor("black");
    } else {
      setBgColor("#222328");
      setFontColor("#a7a7a9");
      setLogoColor("white");
    }
  }, [colormode]);

  const handleLogout = () => dispatch(logout());

  return (
    <div
      className={styles.sidebar}
      style={{
        backgroundColor: bgColor,
        borderRight: `1px ${
          colormode === "light" ? "#dfdfe3" : "#3d3d42"
        } solid`,
      }}
    >
      <div>
        <Link href="/home">
          <a
            className={styles.buttonBox}
            onClick={() => {
              setActive("/home");
            }}
          >
            <img src="/imgs/logobrate.png" alt="logo" style={{width: "600%", borderRadius: "50%"}} />
          </a>  
        </Link>
        <Link href="/home">
          <a
            className={
              active === "/" || active === "/home"
                ? styles.buttonBoxActive
                : styles.buttonBox
            }
            onClick={() => {
              setActive("/home");
            }}
          >
            <BiHomeAlt
              color={fontColor}
              className={styles.button}
              size="1.5rem"
            />
          </a>
        </Link>
        <Link href="/tasks">
          <a
            className={
              active === "/tasks" ? styles.buttonBoxActive : styles.buttonBox
            }
            style={{ backgroundColor: bgColor }}
            onClick={() => setActive("/tasks")}
          >
            <BsListTask
              color={fontColor}
              className={styles.button}
              size="1.5rem"
            />
          </a>
        </Link>

        <Link href="/calendar">
          <a
            className={
              active === "/calendar" ? styles.buttonBoxActive : styles.buttonBox
            }
            onClick={() => setActive("/calendar")}
          >
            <BiCalendarAlt
              color={fontColor}
              className={styles.button}
              size="1.5rem"
            />
          </a>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className={styles.theme}
          style={{ backgroundColor: bgColor, color: fontColor }}
        >
          {colormode === "light" ? (
            <div className={styles.lastIcons}>
              <svg
                style={{ marginBottom: "1rem" }}
                onClick={handleLogout}
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.6rem"
                width="1.6rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <svg
                onClick={() => {
                  dispatch(switchColormode());
                }}
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.37 2.51C6.18938 3.15786 6.09853 3.82744 6.1 4.5C6.1 8.58 9.42 11.9 13.5 11.9C14.18 11.9 14.85 11.81 15.49 11.63C14.9647 12.9207 14.0668 14.0257 12.9109 14.804C11.7551 15.5823 10.3935 15.9987 9 16C5.14 16 2 12.86 2 9C2 6.07 3.81 3.55 6.37 2.51ZM9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389951 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 8.54 17.96 8.08 17.9 7.64C17.4003 8.34066 16.7401 8.91146 15.9746 9.30465C15.2091 9.69784 14.3606 9.90198 13.5 9.9C12.3552 9.90003 11.24 9.53643 10.3152 8.86166C9.39041 8.18688 8.70385 7.23581 8.35454 6.14561C8.00523 5.05541 8.01123 3.88243 8.37167 2.79586C8.73211 1.70928 9.42836 0.765281 10.36 0.0999999C9.92 0.0399999 9.46 0 9 0Z"
                  fill="#181D32"
                  fillOpacity="0.7"
                />
              </svg>
            </div>
          ) : (
            <div className={styles.lastIcons}>
              <svg
                style={{ marginBottom: "1rem" }}
                onClick={handleLogout}
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.6rem"
                width="1.6rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>

              <svg
                onClick={() => {
                  dispatch(switchColormode());
                }}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 8C12.65 8 14 9.35 14 11C14 12.65 12.65 14 11 14C9.35 14 8 12.65 8 11C8 9.35 9.35 8 11 8ZM11 6C8.24 6 6 8.24 6 11C6 13.76 8.24 16 11 16C13.76 16 16 13.76 16 11C16 8.24 13.76 6 11 6ZM1 12H3C3.55 12 4 11.55 4 11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM19 12H21C21.55 12 22 11.55 22 11C22 10.45 21.55 10 21 10H19C18.45 10 18 10.45 18 11C18 11.55 18.45 12 19 12ZM10 1V3C10 3.55 10.45 4 11 4C11.55 4 12 3.55 12 3V1C12 0.45 11.55 0 11 0C10.45 0 10 0.45 10 1ZM10 19V21C10 21.55 10.45 22 11 22C11.55 22 12 21.55 12 21V19C12 18.45 11.55 18 11 18C10.45 18 10 18.45 10 19ZM4.99 3.58C4.89749 3.4873 4.7876 3.41375 4.66662 3.36357C4.54565 3.31339 4.41597 3.28756 4.285 3.28756C4.15403 3.28756 4.02435 3.31339 3.90338 3.36357C3.7824 3.41375 3.67251 3.4873 3.58 3.58C3.4873 3.67251 3.41375 3.7824 3.36357 3.90338C3.31339 4.02435 3.28756 4.15403 3.28756 4.285C3.28756 4.41597 3.31339 4.54565 3.36357 4.66662C3.41375 4.7876 3.4873 4.89749 3.58 4.99L4.64 6.05C5.03 6.44 5.67 6.44 6.05 6.05C6.43 5.66 6.44 5.02 6.05 4.64L4.99 3.58ZM17.36 15.95C17.2675 15.8573 17.1576 15.7837 17.0366 15.7336C16.9157 15.6834 16.786 15.6576 16.655 15.6576C16.524 15.6576 16.3944 15.6834 16.2734 15.7336C16.1524 15.7837 16.0425 15.8573 15.95 15.95C15.8573 16.0425 15.7837 16.1524 15.7336 16.2734C15.6834 16.3944 15.6576 16.524 15.6576 16.655C15.6576 16.786 15.6834 16.9157 15.7336 17.0366C15.7837 17.1576 15.8573 17.2675 15.95 17.36L17.01 18.42C17.4 18.81 18.04 18.81 18.42 18.42C18.5127 18.3275 18.5863 18.2176 18.6364 18.0966C18.6866 17.9757 18.7124 17.846 18.7124 17.715C18.7124 17.584 18.6866 17.4543 18.6364 17.3334C18.5863 17.2124 18.5127 17.1025 18.42 17.01L17.36 15.95ZM18.42 4.99C18.5127 4.89749 18.5863 4.7876 18.6364 4.66662C18.6866 4.54565 18.7124 4.41597 18.7124 4.285C18.7124 4.15403 18.6866 4.02435 18.6364 3.90338C18.5863 3.7824 18.5127 3.67251 18.42 3.58C18.3275 3.4873 18.2176 3.41375 18.0966 3.36357C17.9757 3.31339 17.846 3.28756 17.715 3.28756C17.584 3.28756 17.4543 3.31339 17.3334 3.36357C17.2124 3.41375 17.1025 3.4873 17.01 3.58L15.95 4.64C15.56 5.03 15.56 5.67 15.95 6.05C16.34 6.43 16.98 6.44 17.36 6.05L18.42 4.99ZM6.05 17.36C6.1427 17.2675 6.21625 17.1576 6.26643 17.0366C6.31661 16.9157 6.34244 16.786 6.34244 16.655C6.34244 16.524 6.31661 16.3944 6.26643 16.2734C6.21625 16.1524 6.1427 16.0425 6.05 15.95C5.95749 15.8573 5.8476 15.7837 5.72662 15.7336C5.60565 15.6834 5.47597 15.6576 5.345 15.6576C5.21403 15.6576 5.08435 15.6834 4.96338 15.7336C4.8424 15.7837 4.73251 15.8573 4.64 15.95L3.58 17.01C3.19 17.4 3.19 18.04 3.58 18.42C3.97 18.8 4.61 18.81 4.99 18.42L6.05 17.36Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
