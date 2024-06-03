import ErrorMessage from "../components/UI/ErrorMessage";
import HomeLeft from "./HomeLeft";
import { useDispatch, useSelector } from "react-redux";
import HomeRight from "./HomeRight";
import HomeMiddle from "../components/middle/HomeMiddle";
import { useEffect, useState } from "react";
import ActivateForm from "./ActivateForm";
import "./Activate.css";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { verify } from "../store/auth-slice";

export default function Activate() {
  const { user } = useSelector((state) => state.auth);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    activateAccount();
  }, []);

  const activateAccount = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/activate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        Cookies.set("user", JSON.stringify({ ...user, verified: true }));
        dispatch(verify(true));

        return;
      }

      setError(data.message);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div>
      {success && (
        <ActivateForm
          type="success"
          header="Account verification succeded."
          text={success}
          loading={loading}
        />
      )}
      {error && (
        <ActivateForm
          type="error"
          header="Account verification failed."
          text={error}
          loading={loading}
        />
      )}
      <HomeLeft user={user} />
      <HomeMiddle />
      <HomeRight user={user} />
    </div>
  );
}
