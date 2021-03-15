import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './ducks/employees'

export default configureStore({
  reducer: {
    employees: employeesReducer
  }
})