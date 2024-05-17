import LoginForm from "../../components/auth/LoginForm";
import classes from "./Login.module.css"
export default function LoginPage() {
    return (
      <div className={classes.login}>
        <div className={classes.login_wrapper}>
          <div className={classes.login_wrap}>
            <div className={classes.login_1}>
              <img src="/icons/facebook.svg" alt="Facebook logo"/>
              <span>Facebook helps you connect and share with the people in your life.</span>
            </div>
            <div className={classes.login_2}>
              <LoginForm />
            </div>
            <div className="register"></div>
          </div>
        </div>
      </div>
    );
}
  