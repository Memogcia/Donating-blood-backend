const userController = require('../controllers/user');

module.exports = function(app){
    app.get('/', (req, res) =>{
        res.send('bye');    
    })

    app.post('/register', userController.validate('createUser'), userController.createUser);

    app.get('/deletePatient', () => {
        res.send('bye');
    })

    app.get('/register', (req, res) => {
        res.send('hello');
    });
};