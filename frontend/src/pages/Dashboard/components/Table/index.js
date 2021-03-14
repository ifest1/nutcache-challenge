import styles from './styles.module.css';
import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';
import Modal from '../../../../components/Modal/index';
import FormInput from '../../../../components/FormInput/index';
import IconButton from '../../../../components/IconButton/index';
import RegularButton from '../../../../components/RegularButton/index';
import { FiUser } from 'react-icons/fi'


function Table({
  columns,
  data,
  width,
  height,
  deleteItem
}) {
  
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  return (
    <div>
      <Modal trigger={add} setTrigger={setAdd}>
            <FormInput icon={FiUser}/>
            <FormInput icon={FiUser}/>
            <FormInput icon={FiUser}/>
            <FormInput icon={FiUser}/>
            <FormInput icon={FiUser}/>
            <FormInput icon={FiUser}/>
      </Modal>
      <article style={{ width }} className={styles.tableContainer}>
      <div style={{ height }} className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr>
              {columns.map((column) => (
                <td key={column.key}>{
                  column.key === 'delete' ?
                    <IconButton onClick={() => deleteItem(item.id)}>
                      <RiDeleteBin6Line size={18} color='tomato'/>
                    </IconButton>
                : column.key === 'edit' ?
                    <IconButton onClick={() => console.log('edited')}>
                      <RiEdit2Line size={18}/>
                    </IconButton> : item[column.key]}</td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
    <RegularButton onClick={() => setAdd(true)}>add</RegularButton> 
    </div>
    
  );
}

export default Table;