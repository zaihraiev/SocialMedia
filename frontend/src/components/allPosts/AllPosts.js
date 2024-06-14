import { useEffect, useState } from "react";
import Post from "./Post";

export default function AllPosts({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8000/getAllPosts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post user={user} post={post} key={post.id} />
      ))}
    </div>
  );
}
