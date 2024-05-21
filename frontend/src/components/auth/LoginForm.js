import Input from "../Input";
import classes from "../../pages/auth/Login.module.css";
import { Form } from "react-router-dom";
export default function LoginForm() {
  function handelSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    console.log(email, password);
  }

  return (
    <Form onSubmit={handelSubmit} className={classes.login_form}>
      <Input
        label="Email address"
        id="email"
        type="email"
        className={classes.login_input}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        className={classes.login_input}
      />
      <button className={classes.login_button}>Log in</button>
    </Form>
  );
}
