const User = require('../models/Users');

module.exports = function(app){
    app.get('/', (req, res) =>{
        res.send('bye');    
    })

    /*app.get('/map.html', (req, res) =>{
        res.redirect('/map.html');    
    })
*/

    app.get('/map.html', function(req,res){
        res.sendfile(__dirname + '/map.html');
    }); 

    app.get('/register', (req, res) =>{
        var user = new User({
            first_name: 'Guillermo',
            last_name: 'García',
            email: 'correopatata@patata.com',
            password: '0',
            birthdate: new Date(),
            address: 'Address',
            gender: false,
            bloodType: 1,
            city: 'coty',
            country: 'country',
            telephone: 3331066215,
            cellphone: 3331066215,
            created: new Date(),
            updated: new Date(),
            avatar: 'patatat',
            prevDonations: []
        });

        user.save(function(err){
            console.log(err)
        })
        res.send('hello');
    });

    app.get('/deletePatient', () => {
        res.send('bye');
    })

    app.get('/register', (req, res) => {
        res.send('hello');
    });
};