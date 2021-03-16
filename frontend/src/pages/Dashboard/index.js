import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/index';
import Table from './components/Table/index';
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css';
import columns from './tableColumns';
import { fetchData } from '../../store/apiActions/employees';

function Dashboard() {
  const employees = useSelector(state => state.employees.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <Layout>
      <section className={styles.content}>
        <div className={styles.dataContainer}>
          <div className={styles.tableContainer}>
            <h2>Employees</h2>
            <Table width="100%"
              height="70vh"
              title="Employees"
              columns={columns}
              data={employees}
            />
          </div>
        </div>
      </section>
      
  </Layout>
  )
}

export default Dashboard;