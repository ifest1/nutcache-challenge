import Modal from '../../../../components/Modal/index';
import FormInput from '../../../../components/FormInput/index';
import IconButton from '../../../../components/IconButton/index';
import RegularButton from '../../../../components/RegularButton/index';
import { useDispatch, useSelector } from 'react-redux';
import { update, create } from '../../../../store/apiActions/employees';
import { setModal, setIndexEditing, setCurrentEditing } from '../../../../store/ducks/employees/index';
import { FiXCircle, FiUser } from 'react-icons/fi';
import { FaBirthdayCake, FaCalendarAlt, FaIdCard } from 'react-icons/fa';
import { MdEmail, MdGroup } from 'react-icons/md';

function Form({ trigger = false }) {
  const dispatch = useDispatch();
  const currentEditing = useSelector(state => state.employees.currentEditing);
  const indexEditing = useSelector(state => state.employees.indexEditing);
 
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
        <FormInput placeholder="Name" icon={FiUser} name="name" value={currentEditing.name} onChange={handleChange}/>
        <FormInput placeholder="CPF" icon={FaIdCard} name="cpf" value={currentEditing.cpf} onChange={handleChange}/>
        <FormInput placeholder="Email" icon={MdEmail} name="email" value={currentEditing.email} onChange={handleChange}/>
        <FormInput placeholder="Birth date" icon={FaBirthdayCake} name="birthDate" value={currentEditing.birthDate} onChange={handleChange}/>
        <FormInput placeholder="Start date" icon={FaCalendarAlt} name="startDate" value={currentEditing.startDate} onChange={handleChange}/>
        <FormInput placeholder="Team" icon={MdGroup} name="team" value={currentEditing.team} onChange={handleChange}/>
        <FormInput placeholder="Gender" icon={FiUser} name="gender" value={currentEditing.gender} onChange={handleChange}/>
        <RegularButton onClick={() => indexEditing ? dispatch(update(indexEditing, currentEditing)) : dispatch(create(currentEditing))}>Save</RegularButton>
    </Modal>
  )
}

export default Form;
