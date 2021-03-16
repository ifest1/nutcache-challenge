### Nutcache Frontend Developer Challenge

### Endpoints da API
| Endpoint | HTTP Method | Resultado |
| ------ | ------ | ------ |
| employees/ | GET | Lista todo os empregados. |
| employees/ |  POST | Cadastra um empregado. | 
| clients/id | PATCH | Atualiza os dados de um empregado. |
| clients/id | DELETE | Deleta um empregado. |


### Exemplo de JSON do Schema Employee
```
{
    "name": "Iago Filipe",
    "email": "hiagoestrelas@gmail.com",
    "birthDate": "2000-03-05",
    "team": "Frontend",
    "gender": "Male",
    "startDate": "2021-03-05",
    "cpf": "123.123.123-12"
}
```

### To Dos
- Implementar date picker;
- Exportar tabela como CSV;
- Exportar tabela como JSON;


### Informações adicionais
- Backend no heroku, baseURL: https://nutcachebackend.herokuapp.com/api;
- Ao clonar o repositório dar ```cd frontend```, ```npm install``` e ```npm start```;

