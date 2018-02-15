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



    app.get('/api/get_data_demand', (req, res) => {
        Demand.find({}, (err, Data) => {
            if(err){
                console.log(err);
            }
            else{
                res.send(Data);
            }
        });
    });

    app.get('/api/get_data/:col', (req, res) => {
        const collection = req.params.col;
        let model;
        switch(collection) {
            case "Curve":
                model = Curve;
                break;
            case "Demand":
                model = Demand;
                break;
            case "Margins":
                model = Margins;
                break;
            case "MonthlyDrills":
                model = MonthlyDrills;
                break;
            case "NewsAlgo":
                model = NewsAlgo;
                break;
            case "OVX":
                model = OVX;
                break;
            case "Positions":
                model = Positions;
                break;
            case "Production":
                model = Production;
                break;
            case "Rates":
                model = Rates;
                break;
            case "Sector":
                model = Sector;
                break;
            case "Stocks":
                model = Stocks;
                break;
            case "WeeklyDrills":
                model = WeeklyDrills;
                break;    
        }
        model.find({}, (err, PENE) => {
            res.send(PENE);
        });
    });
}