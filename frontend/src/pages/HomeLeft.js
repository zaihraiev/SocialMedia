import "./HomeLeft.css";
import LeftLink from "./LeftLink";
import { left } from "../data/home";
import { ArrowDown1 } from "../svg";
import { useState } from "react";
import ArrowDow1 from "../svg/arrowDow1";
import Shortcut from "../components/left/Shortcut";
import { Link } from "react-router-dom";

export default function HomeLeft({ user }) {
  let showLinksCss = "show_links";
  const [showLinks, setShowLinks] = useState(false);

  function handleShowLinks() {
    setShowLinks((state) => !state);
  }

  return (
    <div className="left_home">
      <div className="left_link">
        <img src={user?.picture} alt={user?.username} />
        <span>
          {user?.first_name} {user?.last_name}
        </span>
      </div>
      {left.slice(0, 8).map((link, i) => {
        return (
          <LeftLink
            key={i}
            img={link.img}
            text={link.text}
            notification={link.notification}
          />
        );
      })}
      {showLinks && (
        <div className="hidden_links animate_up_to_down">
          {left.slice(8, left.length).map((item) => {
            return (
              <LeftLink
                key={item.id}
                img={item.img}
                text={item.text}
                notification={item.notification}
              />
            );
          })}
        </div>
      )}
      <div className="left_link hover1" onClick={handleShowLinks}>
        <div className={`small_circle ${showLinks ? "rotate_180" : ""}`}>
          <ArrowDown1 />
        </div>
        <span>{showLinks ? "Hide" : "See more"}</span>
      </div>
      <div className="splitter"></div>
      <div className="shortcut">
        <div className="heading">Your shortcuts</div>
        <div className="edit_shortcut">Edit</div>
      </div>
      <div className="shortcut_list">
        <Shortcut
          link="https://www.youtube.com/c/MohamedHaJJi1/featured"
          img="../../images/ytb.png"
          name="My Youtube channel"
        />

        <Shortcut
          link="https://www.instagram.com/med_hajji7/"
          img="../../images/insta.png"
          name="My Instagram "
        />
      </div>
      <div className={`fb_copyright ${showLinks && "relative_fb_copyright"}`}>
        <Link to="/">Privacy </Link>
        <span>. </span>
        <Link to="/">Terms </Link>
        <span>. </span>
        <Link to="/">Advertising </Link>
        <span>. </span>
        <Link to="/">
          Ad Choices <i className="ad_choices_icon"></i>{" "}
        </Link>
        <span>. </span>
        <Link to="/"></Link>Cookies <span>. </span>
        <Link to="/">More </Link>
        <span>. </span> <br />
        Meta © 2022
      </div>
    </div>
  );
}
