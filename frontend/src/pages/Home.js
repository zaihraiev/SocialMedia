import ErrorMessage from "../components/UI/ErrorMessage";
import HomeLeft from "./HomeLeft";
import { useSelector } from "react-redux";
import HomeRight from "./HomeRight";
import HomeMiddle from "../components/middle/HomeMiddle";
import CreatePostPopup from "../components/createPostPopup/CreatePostPopup";
import { useState } from "react";

export default function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
      <HomeLeft user={user} />
      <HomeMiddle setVisible={setVisible} />
      <HomeRight user={user} />
    </div>
  );
}
