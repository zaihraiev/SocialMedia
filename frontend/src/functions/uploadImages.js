export const uploadImages = async (formData, path, token) => {
  try {
    const response = await fetch("http://localhost:8000/uploadImages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
