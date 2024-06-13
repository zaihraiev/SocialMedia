import { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";

export default function EmojiPickerBackgrounds({
  text,
  user,
  setText,
  type2,
  setBackground,
  background,
}) {
  const [picker, setPicker] = useState(false);
  const [showBackgrounds, setShowBackgrounds] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);
  const handleEmoji = (e) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + e.emoji + end;
    setText(newText);
    setCursorPosition(start.length + e.emoji.length);
  };

  const postBackgrounds = [
    "/images/postBackgrounds/1.jpg",
    "/images/postBackgrounds/2.jpg",
    "/images/postBackgrounds/3.jpg",
    "/images/postBackgrounds/4.jpg",
    "/images/postBackgrounds/5.jpg",
    "/images/postBackgrounds/6.jpg",
    "/images/postBackgrounds/7.jpg",
    "/images/postBackgrounds/8.jpg",
    "/images/postBackgrounds/9.jpg",
    "/images/postBackgrounds/10.jpg",
  ];

  function handleBackground(index) {
    bgRef.current.style.backgroundImage = `url(${postBackgrounds[index]})`;
    setBackground(postBackgrounds[index]);
    bgRef.current.classList.add("bgHandler");
  }

  function removeBackground() {
    bgRef.current.style.backgroundImage = "";
    setBackground("");
    bgRef.current.classList.remove("bgHandler");
  }

  return (
    <div className={type2 ? "images_input" : ""}>
      <div className={!type2 ? "flex_center" : ""} ref={bgRef}>
        <textarea
          ref={textRef}
          maxLength="100"
          value={text}
          placeholder={`What's on your mind, ${user.first_name}`}
          className={`post_input ${type2 ? "input2" : ""}`}
          onChange={(e) => setText(e.target.value)}
          style={{
            paddingTop: `${
              background && showBackgrounds && background !== "white"
                ? Math.abs(textRef.current.value.length * 0.1 - 30)
                : "0"
            }%`,
          }}
        ></textarea>
      </div>
      <div className={!type2 ? "post_emojis_wrap" : ""}>
        {picker && (
          <div
            className={`comment_emoji_picker ${
              type2 ? "movepicker2" : "rlmove"
            }`}
          >
            <Picker onEmojiClick={handleEmoji} />
          </div>
        )}
        {!type2 && (
          <img
            src="/icons/colorful.png"
            alt=""
            onClick={() => setShowBackgrounds((state) => !state)}
          />
        )}
        {!type2 && showBackgrounds && (
          <div className="post_backgrounds">
            <div className="no_bg" onClick={removeBackground}></div>
            {postBackgrounds.map((bg, index) => (
              <img
                src={bg}
                alt=""
                key={index}
                onClick={() => handleBackground(index)}
              />
            ))}
          </div>
        )}

        <i
          className={`emoji_icon_large ${type2 ? "moveleft" : ""}`}
          onClick={() => {
            setPicker((prev) => !prev);
          }}
        ></i>
      </div>
    </div>
  );
}
