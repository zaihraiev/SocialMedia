export const createPost = async (
  type,
  background,
  text,
  images,
  user,
  token,
) => {
  try {
    const response = await fetch("http://localhost:8000/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        type,
        background,
        text,
        images,
        user,
      }),
    });

    return "ok";
  } catch (error) {
    return error.message;
  }
};
