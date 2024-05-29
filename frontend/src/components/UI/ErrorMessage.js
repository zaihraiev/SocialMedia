import { useDispatch, useSelector } from "react-redux";
import classes from "./ErrorMessage.module.css";
import { SlClose } from "react-icons/sl";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { uiActions } from "../../store/ui-slice";

export default function ErrorMessage() {
  const { error: errorState } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (errorState) {
      modal.showModal();
    }

    return () => {
      modal.close();
    };
  }, [errorState]);

  function handleErrorModalHide() {
    dispatch(uiActions.clearErrorMessage());
  }

  return createPortal(
    <dialog ref={dialog} className={classes.error_wrapper}>
      <div className={classes.error_wrap}>
        <p className={classes.error_message}>{errorState}</p>
        <SlClose className={classes.exit_icon} onClick={handleErrorModalHide} />
      </div>
      <progress className={classes.error_progress} value={3000} max="3000" />
    </dialog>,
    document.getElementById("modalError"),
  );
}
