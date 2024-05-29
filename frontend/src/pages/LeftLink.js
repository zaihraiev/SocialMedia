export default function LeftLink({ img, text, notification }) {
  return (
    <div className="left_link">
      <img src={`/left/${img}.png`} alt="" />
      {notification && (
        <div className="col">
          <div className="col_1">{text}</div>
          <div className="col_2">{notification}</div>
        </div>
      )}
      {!notification && <span>{text}</span>}
    </div>
  );
}
