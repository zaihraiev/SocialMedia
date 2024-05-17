import Input from "../Input";
import {Link} from "react-router-dom";

export default function LoginForm() {
  return (
    <form className="login_form">
      <Input label="Email address" id="email" type="email" />
      <Input label="Password" id="password" type="password"/>
      <button>Log in</button>
      <p><Link to={'password-reset'}>Forgot password?</Link></p>
    </form>
  );
}