import styles from './styles.module.css';

const Modal = (props) => {
  return (props.trigger) ? (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Modal;