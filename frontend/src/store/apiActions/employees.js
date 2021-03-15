import api from '../../services/api';
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee, 
} from '../ducks/employees/index';

export const fetchData = () => {
  return dispatch => {
    api.get('/employees/')
      .then((res) => {
        dispatch(getEmployees(res.data));
    })
      .catch(err => console.log(err));
  };
}
export const create = (employee) => {
  return dispatch => {
    api.post('/employees/', employee)
      .then((res) => {
        dispatch(createEmployee(res.data));
    })
      .catch(err => console.log(err));
  };
}
export const remove = (id) => {
  return dispatch => {
    api.delete(`/employees/${id}`)
      .then((res) => {
        dispatch(deleteEmployee(res.data));
    })
      .catch(err => console.log(err));
  };
}

export const update = (id, data) => {
  console.log(id, data);
  return dispatch => {
    api.patch(`/employees/${id}`, data)
      .then((res) => {
        dispatch(updateEmployee(res.data));
    })
      .catch(err => console.log(err));
  };
}