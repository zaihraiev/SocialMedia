import Stories from "./Stories";
import "./HomeMiddle.css";
import CreatePost from "./CreatePost";
import { useSelector } from "react-redux";

export default function HomeMiddle() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="home_middle">
      <Stories />
      <CreatePost user={user} />
    </div>
  );
}
