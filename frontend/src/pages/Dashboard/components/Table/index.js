import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri';
import IconButton from '../../../../components/IconButton/index';
import RegularButton from '../../../../components/RegularButton/index';
import { 
  setFormPopup,
  setDeletePopup,
  setCurrentData,
  setCurrentIndex
} from '../../../../store/ducks/employees/index';
import { useDispatch, useSelector } from 'react-redux';
import DeletePopup from '../DeletePopup'
import Form from '../Form';
import styles from './styles.module.css';

function Table({ columns, data, width, height }) {
  const dispatch = useDispatch();

  const modalForm = useSelector(state => state.employees.modals.formPopup);
  const modalDelete = useSelector(state => state.employees.modals.deletePopup);

  const edit = (idx) => {
    dispatch(setCurrentData(data[idx]));
    dispatch(setCurrentIndex(idx));
    dispatch(setFormPopup(true));
  }

  const del = (idx) => {
    dispatch(setCurrentData(data[idx]));
    dispatch(setDeletePopup(true));
  };

  const add = () =>  {
    dispatch(setCurrentData({}));
    dispatch(setFormPopup(true));
  }

  return (
    <div>
      <Form trigger = {modalForm} />
      <DeletePopup trigger={modalDelete} />

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

          <tbody className={styles.tableBody}>
            {data.map((item) => (
              <tr key={item._id}>
              {columns.map((column) => (
                <td key={column.key}>{
                  column.key === 'delete' ?
                  <IconButton
                    onClick={() => del(data.indexOf(item))}>
                    <RiDeleteBin6Line
                      size={18}
                      color='tomato'
                    />
                  </IconButton>
                : column.key === 'edit' ?
                  <IconButton
                    onClick={() => edit(data.indexOf(item))}
                  >
                    <RiEdit2Line 
                      size={18}
                    />
                    </IconButton> : item[column.key]}</td>
                ))}
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
    
      <div className={styles.btnsContainer}>
        <div className={styles.addBtn}>
          <RegularButton onClick={() => add()}>Add</RegularButton>
        </div>
        <div className={styles.handlePrevRegBtns}>
          <RegularButton onClick={() => data.length ? edit(data.length - 1) : null}>Edit previous</RegularButton> 
          <RegularButton onClick={() => data.length ? del(data.length - 1) : null}>Remove previous</RegularButton>
        </div>
      </div> 
    </div>
    
  );
}

export default Table;