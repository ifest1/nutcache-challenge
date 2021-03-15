import styles from './styles.module.css';
import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri';
import IconButton from '../../../../components/IconButton/index';
import RegularButton from '../../../../components/RegularButton/index';
import { useState } from 'react';
import { remove } from '../../../../store/apiActions/employees';
import { setModal, setIndexEditing, setCurrentEditing } from '../../../../store/ducks/employees/index';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/index';

function Table({ columns, data, width, height }) {
  const dispatch = useDispatch();

  const modal = useSelector(state => state.employees.modal);

  const edit = (idx) => {
    dispatch(setCurrentEditing(data[idx]));
    dispatch(setIndexEditing(idx));
    dispatch(setModal(true));
  }

  const add = () =>  {
    dispatch(setCurrentEditing({}));
    dispatch(setModal(true));
  }

  const del = (id) => dispatch(remove(id));

  return (
    <div>
      <Form trigger = {modal} />

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
              <tr key={item._id}>
              {columns.map((column) => (
                <td key={column.key}>{
                  column.key === 'delete' ?
                  <IconButton
                    onClick={() => del(item._id)}>
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
    <RegularButton onClick={() => add()}>add</RegularButton> 
    </div>
    
  );
}

export default Table;