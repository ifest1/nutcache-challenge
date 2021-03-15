import Modal from '../../../../components/Modal/index';
import FormInput from '../../../../components/FormInput/index';
import IconButton from '../../../../components/IconButton/index';
import { useDispatch, useSelector } from 'react-redux';
import { setModal, setIndexEditing, setCurrentEditing } from '../../../../store/ducks/employees/index';
import { FiXCircle, FiUser } from 'react-icons/fi';

function Form({ trigger = false }) {
  const dispatch = useDispatch();
  const currentEditing = useSelector(state => state.employees.currentEditing);
  
  const closeModal = () => {
    dispatch(setModal(false));
    dispatch(setIndexEditing(null));
  }

  const handleChange = (e) => {
    dispatch(setCurrentEditing({...currentEditing, [e.target.name]: e.target.value}));
  }

  return (
    <Modal trigger={trigger}>
      <IconButton onClick={() => closeModal()}>
          <FiXCircle size={18}/>
        </IconButton>
        <FormInput icon={FiUser} name="name" value={currentEditing.name} onChange={handleChange}/>
        <FormInput icon={FiUser} name="cpf" value={currentEditing.cpf} onChange={handleChange}/>
        <FormInput icon={FiUser} name="email" value={currentEditing.email} onChange={handleChange}/>
        <FormInput icon={FiUser} name="birthDate" value={currentEditing.birthDate} onChange={handleChange}/>
        <FormInput icon={FiUser} name="startDate" value={currentEditing.startDate} onChange={handleChange}/>
        <FormInput icon={FiUser} name="team" value={currentEditing.team} onChange={handleChange}/>
        <FormInput icon={FiUser} name="gender" value={currentEditing.gender} onChange={handleChange}/>
    </Modal>
  )
}

export default Form;
