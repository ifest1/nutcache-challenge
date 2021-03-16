import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  previousRegistered: null,
  users: [],
  modal: false,
  indexEditing: null,
  currentEditing: {}
}

export const getEmployees = createAction('GET_EMPLOYEES', (employees) => {
  return {
    payload: employees
  }
})

export const createEmployee = createAction('CREATE_EMPLOYEE', (employee) => {
  return {
    payload: employee,
  } 
});
export const updateEmployee = createAction('UPDATE_EMPLOYEE', (index, data) => {
    return {
      payload: {
        index,
        data
      }
    }
});
export const deleteEmployee = createAction('DELETE_EMPLOYEE', id => {
  return {
    payload: id
  }
});

export const setIndexEditing = createAction('SET_INDEX_EDITING', index => {
  return {
    payload: index
  }
});

export const setCurrentEditing = createAction('SET_CURRENT_EDITING', data => {
  return {
    payload: data
  }
});

export const setModal = createAction('SET_EMPLOYEE_MODAL', modal => {
  return {
    payload: modal
  }
});

export default createReducer(INITIAL_STATE, {
  [getEmployees.type]: (state, action) => ({
    ...state,
    users: action.payload
  }),
  [createEmployee.type]: (state, action) => ({
    ...state,
    users: state.users.concat(action.payload),
  }),
  [deleteEmployee.type]: (state, action) => ({
    ...state,
    users: state.users.filter((user) => user._id != action.payload),
  }),
  [updateEmployee.type]: (state, action) => ({
    ...state,
    users: state.users.slice(0, action.payload.index)
                      .concat(action.payload.data, state.users.slice(action.payload.index + 1))
  }),
  [setModal.type]: (state, action) => ({ 
    ...state,
    modal: action.payload,
  }),
  [setIndexEditing.type]: (state, action) => ({ 
    ...state,
    indexEditing: action.payload
  }),
  [setCurrentEditing.type]: (state, action) => ({ 
    ...state,
    currentEditing: action.payload
  }),
})
