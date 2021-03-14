import { useState } from 'react';
import Layout from '../../components/Layout/index';
import Table from './components/Table/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EmployeeActions from '../../store/actions/ActionsEmployees';
import styles from './styles.module.css';

const columns  = [
  { label: 'Name', key: 'name' },
  { label: 'Birth Date', key: 'birthDate' },
  { label: 'Gender', key: 'gender' },
  { label: 'Email', key: 'email' },
  { label: 'CPF', key: 'cpf' },
  { label: 'Start Date', key: 'startDate' },
  { label: 'Team', key: 'team' },
  { label: 'Edit', key: 'edit' },
  { label: 'Delete', key: 'delete' }
];

function Dashboard({
  employees,
  createEmployee,
  deleteEmployee,
  updateEmployee
}) {
  
  const [trigger, setTrigger] = useState(false);
  const data = employees;
  console.log(data);
  return (
    <Layout>
      <section className={styles.content}>
        <div className={styles.dataContainer}>
          <div className={styles.tableContainer}>
              <h2>Employees</h2>
              <Table
              width="100%"
              height="50vh"
              title="Employees"
              columns={columns}
              data={data}
              deleteItem={deleteEmployee}
            />
          </div>
          <div className={styles.chartsContainer}>
            <div className={styles.genderChart}>
              
            </div>
            <div className={styles.teamsChart}>
              
            </div>
          </div>
        </div>
        <div className={styles.logsContainer}>
          
        </div>
      </section>
      
  </Layout>
  )
}

const mapStateToProps = state => ({
  employees: state.employees.users
});

const mapDispatchToProps = dispatch => bindActionCreators(EmployeeActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);