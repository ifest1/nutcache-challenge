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
        dispatch(deleteEmployee(id));
    })
      .catch(err => console.log(err));
  };
}

export const update = (index, data) => {
  return dispatch => {
    api.patch(`/employees/${data._id}`, data)
      .then((res) => {
        dispatch(updateEmployee(index, res.data));
    })
      .catch(err => console.log(err));
  };
}