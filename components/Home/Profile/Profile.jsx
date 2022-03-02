/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../../../styles/Profile.module.scss";
import "simplebar/src/simplebar.css";

import SimpleBar from "simplebar-react";

import Review from "./Review";

import { useSelector, useDispatch } from "react-redux";
import { switchColormode } from "../../../redux/actions/colormodeActions";

function Profile() {
  const colormode = useSelector((state) => state.color.colormode);
  const user = useSelector((state) => state.info.user);
  const reviews = useSelector((state) => state.review.reviews);
  const dispatch = useDispatch();

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

  return (
    <div
      className={styles.profile}
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      <div
        className={styles.title_top}
        style={{ borderBottom: `1px solid ${borderColor}` }}
      >
        <h5 onClick={() => setDetailsOpen(true)}>Tvoj profil</h5>
      </div>
      <div className={styles.profile_holder}>
        <SimpleBar style={{ maxHeight: "36rem" }}>
          <div className={styles.details}>
            <img
              src="/imgs/avataruser.png"
              alt="pfp"
            />
            <div className={styles.details_text}>
              <h1>{user && user.name}</h1>
              <p>{user && user.email}</p>
            </div>
          </div>
          <div className={styles.reviews}>
            <h3>Ocjene</h3>
            {reviews.map((review) => {
              if(user.type === "Company"){
                if(review.type === "User"){
                  return (
                    <Review review={review} key={review.id} />
                  )
                }
              }else{
                if(review.type === "Company"){
                  return (
                    <Review review={review} key={review.id} />
                  )
                }
              }
            })}
          </div>
        </SimpleBar>
      </div>
    </div>
  );
}

export default Profile;
