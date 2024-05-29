import classes from "./Search.module.css";
import { BsSearch } from "react-icons/bs";
import Input from "../Input";
import { GoArrowLeft } from "react-icons/go";
import useClickOutside from "../../hooks/useClickOutside";
import { useEffect, useRef } from "react";

export default function Search({ showSearch, onClick }) {
  const searchRef = useRef(null);

  useClickOutside(searchRef, () => {
    onClick();
  });

  return (
    <>
      {showSearch && (
        <div className={`${classes.search_wrapper}`} ref={searchRef}>
          <div className={classes.search_wrap}>
            <GoArrowLeft className={classes.icon_back} onClick={onClick} />
            <div className={classes.header_search_wrapper}>
              <BsSearch className={classes.icon_search} />
              <Input
                placeholder="Search Facebook"
                className={classes.header_search}
                autoFocus
              />
            </div>
          </div>
          <div className={classes.search_results_header}>
            <h2 className={classes.search_results_title}>Recent searches</h2>
            <button className={classes.search_results_button}>Edit</button>
          </div>
        </div>
      )}
    </>
  );
}
