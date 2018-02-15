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
    app.get('/api/:col', (req, res) => {
        const col = req.params.col.slice(9);
        console.log(col);
        let model;
        switch(col) {
            case "curve":
                model = Curve;
                let query = {};
                var query = {};
                break;
            case "demand":
                model = Demand;
                break;
            case "margins":
                model = Margins;
                break;
            case "monthlydrills":
                model = MonthlyDrills;
                break;
            case "newsalgo":
                model = NewsAlgo;
                //let query = {};
                //var query = {};
                break;
            case "ovx":
                model = OVX;
                break;
            case "positions":
                model = Positions;
                break;
            case "production":
                model = Production;
                break;
            case "rates":
                model = Rates;
                break;
            case "sector":
                model = Sector;
                break;
            case "stocks":
                model = Stocks;
                break;
            case "weeklydrills":
                model = WeeklyDrills;
                break;
        };
        model.find({}, (err, modelInstances) => {
            const var1 = [], var2 = [], dates = [];

            modelInstances.forEach( instance => {
                //if ( typeof instance.Value === Number ) {
                var1.push(instance.Value);
                dates.push(instance.Date);
                var2.push(instance.Price);
                //} else if ( typeof instance.Price === Number  ) {
                    //var2.push(instance.Price);
            });//});
      
            const Data = {
                dates,
                var1,
                var2
            }
      
            res.send(Data);
        });
    });
}