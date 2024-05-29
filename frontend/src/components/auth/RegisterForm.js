import classes from "../../pages/auth/Register.module.css";
import { SlClose, SlQuestion } from "react-icons/sl";
import { Form, useNavigate } from "react-router-dom";
import Input from "../Input";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth-slice";
import Cookies from "js-cookie";

export default function RegisterForm({ onClick }) {
  const navigate = useNavigate();
  const override = {
    display: "block",
    margin: "0 auto",
  };

  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    year: "1900",
    month: "1",
    day: "1",
    gender: "",
  };

  const [user, setUser] = useState(userInfos);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { first_name, last_name, email, password, year, month, day, gender } =
    user;
  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
          bYear: year,
          bMonth: month,
          bDay: day,
          gender,
        }),
      });

      if (response.ok) {
        setSuccess("Successfully created account");
        setError(undefined);
        const { message, ...rest } = await response.json();
        dispatch(login({ rest }));
        Cookies.set("user", JSON.stringify(rest));
        navigate("/");
      }
      if (!response.ok) {
        setError("Something went wrong");
      }
    } catch (error) {
      setSuccess(undefined);
      setError(error.message);
      setLoading(false);
    }

    setLoading(false);
  }

  return (
    <div className="blur">
      <div className={classes.register}>
        <div className={classes.register_header}>
          <SlClose className={classes.exit_icon} onClick={onClick} />
          <span>Sign Up</span>
          <span>It`s quick and easy</span>
        </div>
        <div className={classes.register_body}>
          <Form onSubmit={handleSubmit} noValidate={true} method="POST">
            <div className={classes.first_data_unit}>
              <Input
                className={classes.half_input}
                type="text"
                id="first_name"
                label="Name"
                name="first_name"
                onChange={handleRegisterChange}
              />
              <Input
                className={classes.half_input}
                type="text"
                id="last_name"
                label="Last Name"
                name="last_name"
                onChange={handleRegisterChange}
              />
              <Input
                type="email"
                id="email"
                label="Phone number or email address"
                name="email"
                onChange={handleRegisterChange}
              />
              <Input
                type="password"
                id="register_password"
                name="password"
                label="Password"
                onChange={handleRegisterChange}
              />
            </div>
            <div className={classes.second_data_unit}>
              <div className={classes.date_unit_wrapper}>
                <p className={classes.title_unit}>
                  <span>Date of birth</span>
                  <span>
                    <SlQuestion className={classes.icon_space} />
                  </span>
                </p>
                <div className={classes.date_unit}>
                  <div>
                    <select
                      name="day"
                      value={day}
                      onChange={handleRegisterChange}
                    >
                      {/* Add options for days */}
                      {[...Array(31)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      name="month"
                      value={month}
                      onChange={handleRegisterChange}
                    >
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((month, i) => (
                        <option key={i + 1} value={i + 1}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      name="year"
                      value={year}
                      onChange={handleRegisterChange}
                    >
                      {Array.from({ length: 124 }, (_, i) => 1900 + i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className={classes.gender_unit}>
                <p className={classes.title_unit}>
                  <span>Date of birth</span>
                  <SlQuestion className={classes.icon_space} />
                </p>
                <div className={classes.register_checkbox_wrapper}>
                  <span className={classes.register_checkbox}>
                    <label>Male</label>
                    <Input
                      className={`${classes.input_space} ${classes.rounded_checkbox}`}
                      type="radio"
                      label="Male"
                      name="gender"
                      value="Male"
                      onChange={handleRegisterChange}
                      noValidate
                    />
                  </span>
                  <span className={classes.register_checkbox}>
                    <label>Female</label>
                    <Input
                      className={`${classes.input_space} ${classes.rounded_checkbox}`}
                      type="radio"
                      label="Female"
                      name="gender"
                      value="Female"
                      onChange={handleRegisterChange}
                      noValidate
                    />
                  </span>
                  <span className={classes.register_checkbox}>
                    <label>Other</label>
                    <Input
                      className={`${classes.input_space} ${classes.rounded_checkbox}`}
                      type="radio"
                      label="Other"
                      value="Other"
                      name="gender"
                      noValidate
                    />
                  </span>
                </div>
              </div>
            </div>
            <p style={{ color: "#999", margin: "10px 0" }}>
              People who use our service may have uploaded your contact
              information to Facebook. More details
            </p>
            <p style={{ color: "#999", margin: "10px 0" }}>
              By clicking the "Register" button, you accept the Terms. Read our
              Privacy Policy to learn how we receive, use and share your data,
              and review our Cookie Policy to learn about our use of cookies and
              similar technologies. You may receive SMS notifications from us,
              which you can cancel at any time.
            </p>
            {!loading && (
              <p>
                <button type="submit" className={classes.register_button}>
                  Register
                </button>
              </p>
            )}
            <ClipLoader
              color={"green"}
              loading={loading}
              size={35}
              cssOverride={override}
            />
            {error && <div>{error}</div>}
            {success && <div>{success}</div>}
          </Form>
        </div>
      </div>
    </div>
  );
}
