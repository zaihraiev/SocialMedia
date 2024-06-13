import Stories from "./Stories";
import "./HomeMiddle.css";
import CreatePost from "./CreatePost";
import { useSelector } from "react-redux";
import SendVerification from "./SendVerification";
import AllPosts from "../allPosts/AllPosts";

export default function HomeMiddle({ setVisible }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="home_middle">
      <Stories />
      {user.verified === false && <SendVerification user={user} />}
      <CreatePost user={user} setVisible={setVisible} />
      <AllPosts user={user} />
    </div>
  );
}
