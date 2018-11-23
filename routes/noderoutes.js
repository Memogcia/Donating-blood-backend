const userController = require('../controllers/user');
const User = require('../models/Users');

module.exports = function(app){
    app.get('/', (req, res) =>{
        res.send('bye');    
    })

    app.post('/register', (req, res) =>{
        console.log(req.body)
        var user = User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            birthdate: req.body.birthdate,
            address: req.body.address,
            gender: req.body.gender,
            bloodType: req.body.bloodType,
            city: req.body.city,
            country: req.body.country,
            telephone: req.body.telephone,
            cellphone: req.body.cellphone,
            avatar: req.body.avatar,
            email: req.body.email,
            created: new Date(),
            updated: new Date()
        })
            .then(user => res.status(200).json(user))
            .catch(error =>  console.log(error))
    })

    app.post('/login', (req, res) => {
        console.log(req.body)
        User.findOne({email: req.body.email}, function(err, user){
            if(!err && user){
                if (user.password === req.body.password) {
                    res.status(200).json({user: user});
                    console.log("user found")
                }
            }
            else{
                console.log("user not found")
                res.status(500).json({});                
            }
        })
    })
};