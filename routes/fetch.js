var Data = require("../models/Data");
var Coll2 = require("../models/Coll2");

module.exports = app => {
    app.get('/api/get_data', (req, res) => {
        Data.find({}, (err, data) => {
            res.send(data);
        });
    });

    app.get('/api/get_data_coll2', (req, res) => {
        Coll2.find({}, (err, data) => {
            res.send(data);
        });
    });
}