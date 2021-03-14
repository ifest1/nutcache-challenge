import {
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
 } from '../../constants/actionTypes';

const INITIAL_STATE = {
  previousRegistered: {},
  logs: [],
  users: [
    {
      id: 1,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 2,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 3,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 4,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 5,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 6,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 7,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 8,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 9,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
  
    },
    {
      id: 10,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
  
    },
    {
      id: 11,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 12,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 13,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 14,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 15,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 16,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 17,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 18,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    },
    {
      id: 19,
      name: 'Iago Filipe',
      birthDate: '05/03/2021',
      gender: 'Male',
      email: 'hiagoestrelas@gmail.com',
      cpf: '71184839409',
      startDate: '03/2021',
      team: 'Development',
    }, 
  ]
}

export default function employees(state = INITIAL_STATE, action) {
  console.log(state.logs);
  switch(action.type) {
    case CREATE_EMPLOYEE:
      console.log('[LOG] Created employee.');
      return {
        ...state,
        users: state.users.concat(action.employee),
        logs: state.logs.concat(`${action.type} ${action.employee.id}`)
      }
    case DELETE_EMPLOYEE:
      console.log('[LOG] Deleted employee.');
    
      return {
        ...state,
        users: state.users.filter((user) => user.id != action.id),
        logs: state.logs.concat(`${action.type} ${action.id}`)
      }
    case UPDATE_EMPLOYEE:
      console.log('[LOG] Updated employee.');
      return state;
    
  }
  return state;
}
