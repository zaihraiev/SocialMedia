import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileActions } from "../../store/profile-slice";

export default function Profile() {
  const { username } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  var userName = user.username ? user.username : username;
  const dispatch = useDispatch();

  useEffect(() => {
    profileActions.profileRequest();
    const getProfile = async () => {
      try {
        const profile = await fetch(
          `http://localhost:8000/getProfile/${userName}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          },
        );

        if (profile.ok) {
          const data = await profile.json();
          dispatch(profileActions.profileSuccess(data));
        }
        dispatch(profileActions.profileError(profile.statusText));
      } catch (error) {
        dispatch(profileActions.profileError(error.message));
      }
    };

    getProfile();
  }, [userName]);
  console.log(profile);
  return (
    <div>
      <h1>Profile </h1>
    </div>
  );
}
