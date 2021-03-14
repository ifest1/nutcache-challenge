import styles from './styles.module.css';
import { FiXCircle } from 'react-icons/fi';
import IconButton from '../../components/IconButton/index';

const Popup = (props) => {
  return (props.trigger) ? (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <IconButton onClick={() => props.setTrigger(false)}>
          <FiXCircle size={18}/>
        </IconButton>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup;