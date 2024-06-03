import classes from "./Header.module.css";
import Input from "../Input";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  Friends,
  Gaming,
  HomeActive,
  Market,
  Menu,
  Messenger,
  Notifications,
  Plus,
  Watch,
} from "../../svg";
import Photo from "../../svg/photo";
import { useSelector } from "react-redux";
import Search from "./Search";
import { useRef, useState } from "react";
import AllMenu from "./AllMenu";
import UserMenu from "./UserMenu";
import useClickOutside from "../../hooks/useClickOutside";

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  const color = "#65676b";
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const menuRef = useRef();

  useClickOutside(menuRef, () => {
    handleOutSideClick();
  });

  function handleInputClick() {
    setShowSearch((state) => !state);
  }

  function handleOutSideClick() {
    setShowMenu(false);
  }

  function handleMenuClick() {
    setShowMenu((state) => !state);
  }

  function handleUserMenuClick() {
    setShowUserMenu((state) => !state);
  }

  return (
    <header className={classes.app_header}>
      <div className={classes.header_left_unit}>
        {!showSearch && (
          <>
            <img
              className={classes.img_logo}
              alt="Logo Facebook"
              src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716372600/icons/yz8dcthgcufavvefp4kd.png"
            />
            <div className={classes.header_search_wrapper}>
              <BsSearch className={classes.icon_search} />
              <Input
                placeholder="Search Facebook"
                className={classes.header_search}
                onClick={handleInputClick}
              />
            </div>
          </>
        )}
        <Search showSearch={showSearch} onClick={handleOutSideClick} />
      </div>
      <div className={classes.header_middle_unit}>
        <Link
          to="/"
          className={`${classes.middle_icon} ${classes.hover1} ${classes.active}`}
        >
          <HomeActive />
        </Link>
        <Link to="/" className={`${classes.middle_icon} ${classes.hover1}`}>
          <Friends color={color} />
        </Link>
        <Link to="/" className={`${classes.middle_icon} ${classes.hover1}`}>
          <Watch color={color} />
          <div className={classes.middle_notification}>9+</div>
        </Link>
        <Link to="/" className={`${classes.middle_icon} ${classes.hover1}`}>
          <Market color={color} />
        </Link>
        <Link to="/" className={`${classes.middle_icon} ${classes.hover1}`}>
          <Gaming color={color} />
        </Link>
      </div>
      <div className={classes.header_right_unit}>
        <Link
          to="/profile"
          className={`${classes.profile_link} ${classes.hover1}`}
        >
          <img
            src={
              user?.picture ??
              "https://res.cloudinary.com/dtduj3zbo/image/upload/v1715767425/users/vhbihnzs2pyvtyucrhy7.png"
            }
            alt="User Profile"
          />
          <span>{user?.first_name}</span>
        </Link>
        <div
          className={`${classes.circle_icon} ${classes.hover1}`}
          onClick={handleMenuClick}
          ref={menuRef}
        >
          <Menu />
          {showMenu && <AllMenu />}
        </div>
        <div className={`${classes.circle_icon} ${classes.hover1}`}>
          <Messenger />
        </div>
        <div className={`${classes.circle_icon} ${classes.hover1}`}>
          <Notifications />
          <div className={classes.right_notification}>5</div>
        </div>
        <div
          className={`${classes.circle_icon} ${classes.hover1}`}
          onClick={handleUserMenuClick}
        >
          <ArrowDown />
        </div>
        {showUserMenu && <UserMenu />}
      </div>
    </header>
  );
}
