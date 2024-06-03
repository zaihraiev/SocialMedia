import LoginForm from "../../components/auth/LoginForm";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";
import { useState } from "react";

export default function LoginPage() {
  const [showRegister, setShowRegister] = useState(false);

  function handleCreateAccountClick() {
    setShowRegister((state) => !state);
  }

  return (
    <>
      <div className={classes.login}>
        <div className={classes.login_wrapper}>
          <div className={classes.login_wrap}>
            <div className={classes.login_1}>
              <img src="/icons/facebook.svg" alt="Facebook logo" />
              <span>
                Facebook helps you connect and share with the people in your
                life.
              </span>
            </div>
            <div className={classes.login_form_wrap}>
              <div className={classes.login_2}>
                <LoginForm />
                <p className={classes.login_link__wrap}>
                  <Link to={"/reset"} className={classes.login_link}>
                    Forgot password?
                  </Link>
                </p>
                <div className={classes.block_split}></div>
                <div className={classes.register_button__wrap}>
                  <button
                    className={classes.register_button}
                    onClick={handleCreateAccountClick}
                  >
                    Create an account
                  </button>
                </div>
              </div>
              <div className={classes.create_page_link__wrap}>
                <Link to={"/"} className={classes.create_page_link}>
                  <b>Create a page </b>
                  for a celebrity, brand or business.
                </Link>
              </div>
            </div>
          </div>
          {showRegister && <RegisterForm onClick={handleCreateAccountClick} />}
        </div>
      </div>
      <div className={classes.login_footer}>
        <Link to={"/"}>English (UK)</Link>
        <Link to={"/"}>Ukrainian (UA)</Link>
        <Link to={"/"}>Русский (RU)</Link>
        <Link to={"/"}>Español (ES)</Link>
        <Link to={"/"}>Português (PB)></Link>
      </div>
    </>
  );
}
