var Data = require("../models/Data");
var Curve = require("../models/Curve");
var Demand = require("../models/Demand");
var Margins = require("../models/Margins");
var MonthlyDrills = require("../models/MonthlyDrills");
var NewsAlgo = require("../models/NewsAlgo");
var OVX = require("../models/OVX");
var Positions = require("../models/Positions");
var Production = require("../models/Production");
var Rates = require("../models/Rates");
var Sector = require("../models/Sector");
var Stocks = require("../models/Stocks");
var WeeklyDrills = require("../models/WeeklyDrills");

module.exports = app => {
    app.get('/api/get_data', (req, res) => {
        Data.find({}, (err, data) => {
            res.send(data);
        });
    });

    app.get('/api/get_data_newsalgo', (req, res) => {
        newsalgo.find({}, (err, PENE) => {
            if(err){
                console.log(err);
            }
            else{
                res.send(PENE);
            }
        });
    });
    
// case "newsalgo"
// model = NewsAlgo

    // app.get('/api/get_data/:col', (req, res) => {
    //     const collection = req.params.col;
    //     let model;
    //     switch(collection) {
    //         case "newsalgo":
    //             model = NewsAlgo;
    //             break;
    //         case "coll3":
    //             model = Coll3;
    //             break;
    //     }

    //     model.find({}, (err, PENE) => {
    //         res.send(PENE);
    //     });
    // });
}