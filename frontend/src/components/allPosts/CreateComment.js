import { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";

export default function CreateComment({ user }) {
  const [picker, setPicker] = useState(false);
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [commentImage, setCommentImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState(0);
  const textRef = useRef(null);
  const imgInput = useRef(null);

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  function handleEmoji(e) {
    const ref = textRef.current;
    ref.focus();

    const start = desc.substring(0, ref.selectionStart);
    const end = desc.substring(ref.selectionEnd);
    const newText = start + e.emoji + end;

    setDesc(newText);
    setCursorPosition(start.length + e.emoji.length);
  }

  function handleImage(e) {
    let file = e.target.files[0];

    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/jpg" &&
      file.type !== "image/gif" &&
      file.type !== "image/webp"
    ) {
      setError(`${file.name} format is not supported`);
      return;
    } else if (file.size > 1024 * 1024 * 5) {
      setError("File size is too large");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setCommentImage(event.target.result);
    };

    e.target.value = "";
  }

  function handleText(e) {
    setDesc((state) => (state = e.target.value));
  }

  return (
    <div className="create_comment_wrap">
      <div className="create_comment">
        <img src={user?.picture} alt="" />
        <div className="comment_input_wrap">
          {picker && (
            <div className="comment_emoji_picker">
              <Picker onEmojiClick={handleEmoji} />
            </div>
          )}
          <input
            type="file"
            hidden
            ref={imgInput}
            accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
            onChange={handleImage}
          />
          {error && (
            <div className="postError comment_error">
              <div className="postError_error">{error}</div>
              <button className="blue_btn" onClick={() => setError("")}>
                Try again
              </button>
            </div>
          )}
          <input
            type="text"
            ref={textRef}
            value={desc}
            placeholder="Write a comment..."
            onChange={handleText}
          />
          <div
            className="comment_circle_icon hover1"
            onClick={() => {
              setPicker((state) => !state);
            }}
          >
            <i className="emoji_icon"></i>
          </div>
          <div
            className="comment_circle_icon hover1"
            onClick={() => imgInput.current.click()}
          >
            <i className="camera_icon"></i>
          </div>
          <div className="comment_circle_icon hover1">
            <i className="gif_icon"></i>
          </div>
          <div className="comment_circle_icon hover1">
            <i className="sticker_icon"></i>
          </div>
        </div>
      </div>
      {commentImage && (
        <div className="comment_img_preview">
          <img src={commentImage} alt="" />
          <div
            className="small_white_circle"
            onClick={() => setCommentImage("")}
          >
            <i className="exit_icon"></i>
          </div>
        </div>
      )}
    </div>
  );
}
