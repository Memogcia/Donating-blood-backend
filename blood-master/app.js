const express       = require('express'), 
    app             = express(),
    cors            = require('cors'),
    bodyParser      = require('body-parser'),
    compression     = require('compression'),
    logger          = require('morgan'),
    mongoose        = require('mongoose'),
    CONFIG          = require('./config/config');

mongoose.connect('mongodb://' + CONFIG.db_user + ':' + CONFIG.db_password + '@' + CONFIG.db_host + ':' + CONFIG.db_port + '/' + CONFIG.db_name);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(compression());

require('./routes')(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(CONFIG.port, () => {
    console.log('App running on port: ' + CONFIG.port);
});
