import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  users: [],
  modals: {
    deletePopup: false,
    formPopup: false,
  },
  current: {
    index: null,
    data: {}
  }
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

export const setCurrentIndex = createAction('SET_CURRENT_INDEX', index => {
  return {
    payload: index
  }
});

export const setCurrentData = createAction('SET_CURRENT_DATA', data => {
  return {
    payload: data
  }
});

export const setFormPopup = createAction('SET_EMPLOYEE_FORM_MODAL', value => {
  return {
    payload: value
  }
});

export const setDeletePopup = createAction('SET_EMPLOYEE_DELETE_MODAL', value => {
  return {
    payload: value
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
                      .concat(action.payload.data,
                      state.users.slice(action.payload.index + 1))
  }),
  [setFormPopup.type]: (state, action) => ({ 
    ...state,
    modals: {...state.modals, formPopup: action.payload},
  }),
  [setDeletePopup.type]: (state, action) => ({ 
    ...state,
    modals: {...state.modals, deletePopup: action.payload},
  }),
  [setCurrentIndex.type]: (state, action) => ({ 
    ...state,
    current: {...state.current, index: action.payload }
  }),
  [setCurrentData.type]: (state, action) => ({ 
    ...state,
    current: {...state.current, data: action.payload }
  }),
})
