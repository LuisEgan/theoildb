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


    app.post('/api/:col', (req, res) => {
        var QueryOne = req.body.QueryOne;
        var QueryTwo = req.body.QueryTwo;
        //console.log("COUNTRY");
        //console.log(QueryOne);
        //console.log(QueryTwo);
        //console.log("COUNTRY");
        //console.log("");
        const col = req.params.col.slice(9);
        let model;
        switch(col) {
            case "curve":
                model = Curve;
                break;
            case "demand":
                model = Demand;
                break;
            case "margins":
                model = Margins;
                if ( QueryOne === undefined || QueryOne === "" ) {
                    QueryOne = "WTI (US)",
                    QueryTwo = "Brent (EU)"
                } else if ( QueryOne === QueryTwo ) {
                    QueryTwo = ""
                };
                break;
            case "monthlydrills":
                if ( QueryOne === undefined || QueryOne === "" ) {
                    QueryOne = "World",
                    QueryTwo = "Middle East"
                } else if ( QueryOne === QueryTwo ) {
                    QueryTwo = ""
                };
                model = MonthlyDrills;
                break;
            case "newsalgo":
                model = NewsAlgo;
                break;
            case "ovx":
                model = OVX;
                break;
            case "positions":
                model = Positions;
                break;
            case "production":
                model = Production;
                if ( QueryOne === undefined || QueryOne === "" ) {
                    QueryOne = "US",
                    QueryTwo = "Iraq"
                } else if ( QueryOne === QueryTwo ) {
                    QueryTwo = ""
                };
                break;
            case "rates":
                model = Rates;
                if ( QueryOne === undefined || QueryOne === "" ) {
                    QueryOne = "Caribbean - US East Coast",
                    QueryTwo = "Mediterranean - Mediterranean"
                } else if ( QueryOne === QueryTwo ) {
                    QueryTwo = ""
                };
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
        }
        let Info;
        switch(col) {
            case "curve":
                Info = {
                    Args: ['Curve'],
                    Labels: ['Contract Price'],
                    AxisLabels: ['Contracts', 'Prices'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                };
                break;
            case "demand":
                Info = {
                    Args: ['Worldwide Demand'],
                    Labels: ['Demand'],
                    AxisLabels: ['Date (Quarterly)', 'M. Barrels Per Day'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                };
                break;
            case "margins":
                Info = {
                    Args: [ QueryOne, QueryTwo ],
                    Labels: [ QueryOne, QueryTwo ],
                    AxisLabels: ['Date (Monthly)', '$ per Barrel'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                };
                break;
            case "monthlydrills":
                Info = {
                    Args: [ QueryOne, QueryTwo ],
                    Labels: [ QueryOne, QueryTwo ],
                    AxisLabels: ['Date (Monthly)', '# of Drills'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                };
                break;
            case "newsalgo":
                Info = {
                    Args: ['Algo', 'Price'],
                    Labels: ['News Algorithm', 'Oil Returns'],
                    AxisLabels: ['Date (Daily)', '% of Pos. News', '4-month Oil Returns (%)'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'Yes',
                };
                break;
            case "ovx":
                Info = {
                    Args: ['OVX'],
                    Labels: ['OVX'],
                    AxisLabels: ['Date (Daily)', 'USO Expected Vol.'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                };
                break;
            case "positions":
                Info = {
                    Args: ['Longs', 'Shorts'],
                    Labels: ['Longs', 'Shorts'],
                    AxisLabels: ['Date (Weekly)', '# of Positions'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                };
                break;
            case "production":
                Info = {
                    Args: [ QueryOne, QueryTwo ],
                    Labels: [ QueryOne, QueryTwo],
                    AxisLabels: ['Date (Monthly)', 'Daily Oil Production'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                };
                break;
            case "rates":
                Info = {
                    Args: [ QueryOne, QueryTwo ],
                    Labels: [ QueryOne, QueryTwo ],
                    AxisLabels: ['Date (Monthly)', '$ per Barrel'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                };
                break;
            case "sector":
                Info = {
                    Args: ['S&P Energy Sector'],
                    Labels: ['S&P Energy Sector'],
                    AxisLabels: ['Date (Daily)', 'Index Points'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                };
                break;
            case "stocks":
                Info = {
                    Args: ['OECD Stocks'],
                    Labels: ['OECD Stocks'],
                    AxisLabels: ['Date (Monthly)', 'Millions of Barrels'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                };
                break;
            case "weeklydrills":
                Info = {
                    Args: ['Canada', 'US'],
                    Labels: ['Canada', 'US'],
                    AxisLabels: ['Date (Weekly)', '# of Drills'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                };
                break;
        };
        //console.log("COL");
        //console.log(col);
        //console.log("COL");
        //console.log("");
        if ( col === 'margins' || col === "monthlydrills" || col === "production" || col === "rates" ) {
            model.find({ $or: [
                {Arg: Info.Args[0]}, {Arg: Info.Args[1]}
            ]}, (err, modelInstances) => {
                const var1 = [], var2 = [], dates = [];

                modelInstances.forEach( instance => {
                    if ( instance.Arg === Info.Args[0] ) {
                        if (typeof instance.Value === String) {
                            var1.push(Number.Nan);
                            dates.push(instance.Date);
                        } else {
                            var1.push(instance.Value);
                            dates.push(instance.Date);
                        }
                    } else if ( instance.Arg === Info.Args[1] ) {
                        if (typeof instance.Value === String) {
                            var2.push(Number.Nan);
                        } else {
                            var2.push(instance.Value);
                        }
                    }
                });
                const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis; 
                const Data = {
                    OnlySingleVar,
                    DoubleYAxis,
                    Var1Label,
                    Var2Label,
                    XLabel,
                    Y1Label,
                    Y2Label,
                    dates, 
                    var1,
                    var2
                }
                res.send(Data);
            });
        } else {
            model.find({}, (err, modelInstances) => {
                const var1 = [], var2 = [], dates = [];

                modelInstances.forEach( instance => {
                    if ( instance.Arg === Info.Args[0] ) {
                        if (typeof instance.Value === String) {
                            var1.push(Number.Nan);
                            dates.push(instance.Date);
                        } else {
                            var1.push(instance.Value);
                            dates.push(instance.Date);
                        }
                    } else if ( instance.Arg === Info.Args[1] ) {
                        if (typeof instance.Value === String) {
                            var2.push(Number.Nan);
                        } else {
                            var2.push(instance.Value);
                        }
                    }
                });
                const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis; 
                const Data = {
                    OnlySingleVar,
                    DoubleYAxis,
                    Var1Label,
                    Var2Label,
                    XLabel,
                    Y1Label,
                    Y2Label,
                    dates, 
                    var1,
                    var2
                }
                res.send(Data);
            });
        }
    }); 
}
