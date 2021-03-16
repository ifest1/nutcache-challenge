import Modal from '../../../../components/Modal/index';
import FormInput from '../../../../components/FormInput/index';
import IconButton from '../../../../components/IconButton/index';
import RegularButton from '../../../../components/RegularButton/index';
import Dropdown from '../../../../components/Dropdown/index';
import { useDispatch, useSelector } from 'react-redux';
import { update, create } from '../../../../store/apiActions/employees';
import { 
  setFormPopup,
  setCurrentData,
  setCurrentIndex,
} from '../../../../store/ducks/employees/index';
import { FiXCircle, FiUser } from 'react-icons/fi';
import { FaBirthdayCake, FaCalendarAlt, FaIdCard } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Form({ trigger = false }) {
  const dispatch = useDispatch();
  const currentData = useSelector(state => state.employees.current.data);
  const currentIndex = useSelector(state => state.employees.current.index);
 
  const closeModal = () => {
    dispatch(setFormPopup(false));
    dispatch(setCurrentIndex(null));
  }

  const onSubmit = () => {
    if (currentIndex) dispatch(update(currentIndex, currentData))
    else dispatch(create(currentData))
    dispatch(setFormPopup(false));
    dispatch(setCurrentIndex(null));
  }
  const handleChange = (e) => {
    dispatch(setCurrentData({...currentData, [e.target.name]: e.target.value}));
  }

  return (
    <Modal trigger={trigger}>
      <IconButton onClick={() => closeModal()}>
          <FiXCircle size={18}/>
        </IconButton>
        <FormInput placeholder="Name" icon={FiUser} name="name" value={currentData.name} onChange={handleChange}/>
        <FormInput placeholder="CPF" icon={FaIdCard} name="cpf" value={currentData.cpf} onChange={handleChange}/>
        <Dropdown name="team" options={['Frontend', 'Backend', 'Mobile', 'None']} value={currentData.team} onChange={handleChange} />
        <FormInput placeholder="Email" icon={MdEmail} name="email" value={currentData.email} onChange={handleChange}/>
        <FormInput placeholder="Birth date" icon={FaBirthdayCake} name="birthDate" value={currentData.birthDate} onChange={handleChange}/>
        <FormInput placeholder="Start date" icon={FaCalendarAlt} name="startDate" value={currentData.startDate} onChange={handleChange}/>
        <Dropdown name="gender" options={['Male', 'Female']} value={currentData.gender} onChange={handleChange} />
        <RegularButton onClick={() => onSubmit()}>Save</RegularButton>
    </Modal>
  )
}

export default Form;
