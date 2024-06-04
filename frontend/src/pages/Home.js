import ErrorMessage from "../components/UI/ErrorMessage";
import HomeLeft from "./HomeLeft";
import { useSelector } from "react-redux";
import HomeRight from "./HomeRight";
import HomeMiddle from "../components/middle/HomeMiddle";
import CreatePostPopup from "../components/createPostPopup/CreatePostPopup";

export default function HomePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <CreatePostPopup user={user} />
      <HomeLeft user={user} />
      <HomeMiddle />
      <HomeRight user={user} />
    </div>
  );
}
