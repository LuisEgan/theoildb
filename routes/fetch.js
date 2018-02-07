var Data = require("../models/Data");
var Coll2 = require("../models/Coll2");
var Coll3 = require("../models/Coll2");

module.exports = app => {
    app.get('/api/get_data', (req, res) => {
        Data.find({}, (err, data) => {
            res.send(data);
        });
    });

    app.get('/api/get_data_coll2', (req, res) => {
        Coll2.find({}, (err, PENE) => {
            if(err){
                console.log(err);
            }
            else{
                res.send(PENE);
            }
        });
    });
    
    app.get('/api/get_data/:col', (req, res) => {
        const collection = req.params.col;
        let model;
        switch(collection) {
            case "coll2":
                model = Coll2;
                break;
            case "coll3":
                model = Coll3;
                break;
        }

        model.find({}, (err, data) => {
            res.send(data);
        });
    });
}