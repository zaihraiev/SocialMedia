import classes from "../../pages/auth/Register.module.css";
import { SlClose, SlQuestion } from "react-icons/sl";
import { Form } from "react-router-dom";
import Input from "../Input";
import { useState } from "react";

export default function RegisterForm() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.id);
  };

  const handleSpanClick = (id) => {
    setSelectedGender(id);
  };

  return (
    <div className="blur">
      <div className={classes.register}>
        <div className={classes.register_header}>
          <SlClose className={classes.exit_icon} />
          <span>Sign Up</span>
          <span>It`s quick and easy</span>
        </div>
        <div className={classes.register_body}>
          <Form>
            <div className={classes.first_data_unit}>
              <Input
                className={classes.half_input}
                type="text"
                id="name"
                label="Name"
              />
              <Input
                className={classes.half_input}
                type="text"
                id="lastName"
                label="Last Name"
              />
              <Input
                type="text"
                id="phoneOrEmail"
                label="Phone number or email address"
              />
              <Input type="password" id="password" label="Password" />
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
                    <select id="day">
                      {/* Add options for days */}
                      {[...Array(31)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select id="month">
                      {/* Add options for months */}
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
                    <select id="year">
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
                  <span
                    className={classes.register_checkbox}
                    onClick={() => handleSpanClick("male")}
                  >
                    <label>Male</label>
                    <Input
                      className={`${classes.input_space} ${classes.rounded_checkbox}`}
                      type="radio"
                      id="male"
                      label="Male"
                      checked={selectedGender === "male"}
                      onChange={handleGenderChange}
                    />
                  </span>
                  <span
                    className={classes.register_checkbox}
                    onClick={() => handleSpanClick("female")}
                  >
                    <label>Female</label>
                    <Input
                      className={`${classes.input_space} ${classes.rounded_checkbox}`}
                      type="radio"
                      id="female"
                      label="Female"
                      checked={selectedGender === "female"}
                      onChange={handleGenderChange}
                    />
                  </span>
                  <span
                    className={classes.register_checkbox}
                    onClick={() => handleSpanClick("other")}
                  >
                    <label>Other</label>
                    <Input
                      className={`${classes.input_space} ${classes.rounded_checkbox}`}
                      type="radio"
                      id="other"
                      label="Other"
                      checked={selectedGender === "other"}
                      onChange={handleGenderChange}
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
            <p>
              <button className={classes.register_button}>Register</button>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
