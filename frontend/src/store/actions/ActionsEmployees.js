export function createEmployee(employee) {
  return {
    type: 'CREATE_EMPLOYEE',
    employee,
  };
}

export function deleteEmployee(id) {
  return {
    type: 'DELETE_EMPLOYEE',
    id,
  };
}

export function updateEmployee(employee) {
  return {
    type: 'UPDATE_EMPLOYEE',
    employee,
  };
}

/*
export function deletePreviousEmployee(employee) {
  return {
    type: 'DELETE_EMPLOYEE',
    employee,
  };
}

export function updatePreviousEmployee(employee) {
  return {
    type: 'DELETE_EMPLOYEE',
    employee,
  };
}

*/