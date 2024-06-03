import Stories from "./Stories";
import "./HomeMiddle.css";
import CreatePost from "./CreatePost";
import { useSelector } from "react-redux";
import SendVerification from "./SendVerification";

export default function HomeMiddle() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="home_middle">
      <Stories />
      {user.verified === false && <SendVerification user={user} />}
      <CreatePost user={user} />
    </div>
  );
}
