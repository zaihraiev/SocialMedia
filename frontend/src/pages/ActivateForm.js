import { PropagateLoader } from "react-spinners";

export default function ActivateForm({ header, text, loading, type }) {
  return (
    <div className="blur">
      <div className="popup">
        <div
          className={`popup_header ${
            type === "success" ? "success_text" : "error_text"
          }`}
        >
          {header}
        </div>
        <div className="popup_message">{text}</div>
        <PropagateLoader color="#1876f2" size={30} loading={loading} />
      </div>
    </div>
  );
}
