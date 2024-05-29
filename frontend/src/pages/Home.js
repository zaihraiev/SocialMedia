import ErrorMessage from "../components/UI/ErrorMessage";
import HomeLeft from "./HomeLeft";
import { useSelector } from "react-redux";
import HomeRight from "./HomeRight";
import HomeMiddle from "../components/middle/HomeMiddle";

export default function HomePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <HomeLeft user={user} />
      <HomeMiddle />
      <HomeRight user={user} />
    </div>
  );
}
