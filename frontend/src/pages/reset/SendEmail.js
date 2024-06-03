import { Link } from "react-router-dom";

export default function SendEmail({
  user,
  error,
  setError,
  setVisible,
  setUserInfos,
  loading,
  setLoading,
  email,
}) {
  async function sendEmail() {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:8000/sendResetPasswordCode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
          }),
        },
      );

      if (!response.ok) {
        setError(response.statusText);
        setLoading(false);
      } else {
        setLoading(false);
        setVisible(2);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setVisible(true);
    }
  }

  return (
    <div className="reset_form dynamic_height">
      <div className="reset_form_header">Reset Your Password</div>
      <div className="reset_grid">
        <div className="reset_left">
          <div className="reset_form_text">
            How do you want to receive the code to reset your password?
          </div>
          <label htmlFor="email" className="hover1">
            <input type="radio" name="" id="email" checked readOnly />
            <div className="label_col">
              <span>Send code via email</span>
              <span>email@email.email</span>
            </div>
          </label>
        </div>
        <div className="reset_right">
          <img src={user.picture} alt="" />
          <span>email@email.email</span>
          <span>Facebook user</span>
        </div>
      </div>
      {error && <div className="error_text">Error: {error}</div>}
      <div className="reset_form_btns">
        <Link to="/login" className="gray_btn">
          Not You ?
        </Link>
        <button onClick={sendEmail} type="submit" className="blue_btn">
          Continue
        </button>
      </div>
    </div>
  );
}
