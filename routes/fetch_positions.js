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

    app.get('/api/get_data_positions', (req, res) => {

        Positions.find( {}, (err, modelInstances) => {
          const longs = [], shorts = [], date = [];
      
          modelInstances.forEach( instance => {
            if ( instance.Arg === 'Long' ) {
              longs.push(instance.Value);
              date.push(instance.Date);
            } else {
              shorts.push(instance.Value);
          }});
      
          const Data = {
            date,
            longs,
            shorts
          }
      
          res.send(Data);
      
        });
          
    });
}
