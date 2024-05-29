import Input from "../Input";
import classes from "../../pages/auth/Login.module.css";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { ClipLoader } from "react-spinners";
import { login } from "../../store/auth-slice";
import Cookies from "js-cookie";
export default function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui);
  const navigate = useNavigate();

  const override = {
    display: "block",
    margin: "0 auto",
  };

  async function handelSubmit(event) {
    dispatch(uiActions.showLoader());
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const { ...data } = await response.json();
        dispatch(login(data));

        navigate("/");
      }
      if (!response.ok) {
        const data = await response.json();
        dispatch(uiActions.addErrorMessage(data.message));
      }
      dispatch(uiActions.hideLoader());
    } catch (error) {
      dispatch(uiActions.addErrorMessage(error.message));
      dispatch(uiActions.hideLoader());
    }
    dispatch(uiActions.hideLoader());
  }

  return (
    <Form onSubmit={handelSubmit} className={classes.login_form}>
      <Input
        label="Email address"
        name="email"
        type="email"
        className={classes.login_input}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        className={classes.login_input}
      />
      {!isLoading && (
        <button className={classes.login_button} type="submit">
          Log in
        </button>
      )}
      <ClipLoader
        color={"green"}
        loading={isLoading}
        size={35}
        cssOverride={override}
      />
    </Form>
  );
}
