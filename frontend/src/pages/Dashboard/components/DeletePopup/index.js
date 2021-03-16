import Modal from '../../../../components/Modal';
import RegularButton from '../../../../components/RegularButton';
import { setDeletePopup, setCurrentData } from '../../../../store/ducks/employees/index';
import { remove } from '../../../../store/apiActions/employees';
import IconButton from '../../../../components/IconButton/index';
import { FiXCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';


function DeletePopup({trigger}) {
  const currentData = useSelector(state => state.employees.current.data);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(remove(id));
    dispatch(setDeletePopup(false));
  }

  const closeModal = () => {
    dispatch(setDeletePopup(false));
    dispatch(setCurrentData({}));
  }

  return (
    <Modal trigger={trigger}>
      <IconButton onClick={() => closeModal()}>
          <FiXCircle size={18}/>
        </IconButton>
      <p>Are you sure you want to delete this item?</p>
      <RegularButton onClick={() => onDelete(currentData._id)}>
        Yes
      </RegularButton>
    </Modal>
  )
}

export default DeletePopup;
