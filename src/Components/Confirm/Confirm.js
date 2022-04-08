import ReactDOM from "react-dom";

import styles from "./Confirm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onNoConfirm} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>Are you sure?</h2>
      </header>

      <footer className={styles.actions}>
        <Button onClick={props.onConfirm} className={styles["btn-confirm"]}>
          Yes
        </Button>
        <Button onClick={props.onNoConfirm} className={styles["btn-noConfirm"]}>
          No
        </Button>
      </footer>
    </Card>
  );
};

const Confirm = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onNoConfirm={props.onNoConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          onNoConfirm={props.onNoConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Confirm;
