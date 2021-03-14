const router = require('express').Router();
const employeesController = require('./controllers/employeeController');

router.post('/employees', employeesController.store);
router.get('/employees', employeesController.index);
router.delete('/employees/:id', employeesController.remove);
router.patch('/employees/:id', employeesController.update);

module.exports = router;