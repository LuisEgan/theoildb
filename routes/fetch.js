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
        var QueryTF = req.body.QueryTF;
        var QueryCurveOne = req.body.QueryCurveOne;
        var QueryCurveTwo = req.body.QueryCurveTwo;
        const col = req.params.col.slice(9);
        let model;
        switch(col) {
            case "curve":
                model = Curve;
                if ( QueryCurveOne === undefined || QueryCurveOne === "" ) {
                    QueryCurveOne = "Last Day",
                    QueryCurveTwo = ""
                } else if ( QueryCurveOne === QueryCurveTwo ) {
                    QueryCurveTwo = ""
                };
                break;
            case "demand":
                model = Demand;
                break;
            case "margins":
                model = Margins;
                if ( QueryOne === undefined || QueryOne === "" ) {
                    QueryOne = "WTI (US)",
                    QueryTwo = "Brent (US)"
                } else if ( QueryOne === QueryTwo ) {
                    QueryTwo = ""
                };
                break;
            case "monthlydrills":
                model = MonthlyDrills;            
                if ( QueryOne === undefined || QueryOne === "" ) {
                    QueryOne = "World",
                    QueryTwo = "Middle East"
                } else if ( QueryOne === QueryTwo ) {
                    QueryTwo = ""
                };
                break;
            case "newsalgo":
                model = NewsAlgo;
                if ( QueryTF === undefined || QueryTF === "" ) {
                    QueryTF = "3 months"
                };
                break;
            case "ovx":
                model = OVX;
                if ( QueryTF === undefined || QueryTF === "" ) {
                    QueryTF = "3 months"
                };
                break;
            case "positions":
                model = Positions;
                if ( QueryTF === undefined || QueryTF === "" ) {
                    QueryTF = "3 months"
                };
                break;
            case "production":
                model = Production;
                if ( QueryOne === undefined || QueryOne === "" ) {
                    QueryOne = "Total: Worldwide",
                    QueryTwo = "Total: OPEC (Crude)"
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
                if ( QueryTF === undefined || QueryTF === "" ) {
                    QueryTF = "3 months"
                };
                break;
            case "stocks":
                model = Stocks;
                break;
            case "weeklydrills":
                model = WeeklyDrills;
                if ( QueryTF === undefined || QueryTF === "" ) {
                    QueryTF = "3 months"
                };
                break;
        }
        let Info;
        switch(col) {
            case "curve":
                Info = {
                    Args: [ QueryCurveOne, QueryCurveTwo ],
                    Labels: [ QueryCurveOne + " Curve", QueryCurveTwo + " Curve" ],
                    AxisLabels: [ QueryCurveOne + ' Contracts', 'Prices', QueryCurveTwo + ' Contracts'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'Yes',
                };
                break;
            case "demand":
                Info = {
                    Args: ['Worldwide Demand'],
                    Labels: ['Demand'],
                    AxisLabels: ['Date (Quarterly)', 'M. Barrels Per Day'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
            case "margins":
                Info = {
                    Args: [ QueryOne, QueryTwo ],
                    Labels: [ QueryOne, QueryTwo ],
                    AxisLabels: ['Date (Monthly)', '$ per Barrel'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
            case "monthlydrills":
                Info = {
                    Args: [ QueryOne, QueryTwo ],
                    Labels: [ QueryOne, QueryTwo ],
                    AxisLabels: ['Date (Monthly)', '# of Drills'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
            case "newsalgo":
                Info = {
                    Args: ['Algo', 'Price'],
                    Labels: ['News Algorithm', 'Oil 4-month Returns'],
                    AxisLabels: ['Date', 'Positive News (%)', 'Oil 4-month Returns (%)'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'Yes',
                    DoubleXAxis: 'No',
                };
                break;
            case "ovx":
                Info = {
                    Args: ['OVX'],
                    Labels: ['OVX'],
                    AxisLabels: ['Date', 'OVX'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
            case "positions":
                Info = {
                    Args: ['Longs - Shorts'],
                    Labels: ['Longs - Shorts'],
                    AxisLabels: ['Date (Weekly)', '# of Positions'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
            case "production":
                Info = {
                    Args: [ QueryOne, QueryTwo ],
                    Labels: [ QueryOne, QueryTwo],
                    AxisLabels: ['Date (Monthly)', 'Daily Production'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
            case "rates":
                Info = {
                    Args: [ QueryOne, QueryTwo ],
                    Labels: [ QueryOne, QueryTwo ],
                    AxisLabels: ['Date (Monthly)', '$ per Barrel'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
            case "sector":
                Info = {
                    Args: ['S&P Energy Sector'],
                    Labels: ['S&P Energy Sector'],
                    AxisLabels: ['Date', 'Index Points'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
            case "stocks":
                Info = {
                    Args: ['OECD Stocks'],
                    Labels: ['OECD Stocks'],
                    AxisLabels: ['Date (Monthly)', 'Millions of Barrels'],
                    OnlySingleVar: 'Yes',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
            case "weeklydrills":
                Info = {
                    Args: ['Canada', 'US'],
                    Labels: ['Canada', 'US'],
                    AxisLabels: ['Date (Weekly)', '# of Drills'],
                    OnlySingleVar: 'No',
                    DoubleYAxis: 'No',
                    DoubleXAxis: 'No',
                };
                break;
        };
        if ( col === 'curve' ) {
            //console.log("~~~~~~~~~~~~~~");
            //console.log(Info.Args[0]);
            //console.log(Info.Args[1]);
            //console.log("~~~~~~~~~~~~~~");
            //console.log("");
            if ( Info.Args[1] === "" ) {
                model.find({ Arg: { $regex: Info.Args[0], $options: 'i' }}, (err, modelInstances) => {
                    var var1 = [], var2 = [], dates1 = [], dates2 = [], varName1 = "";
                    modelInstances.forEach( instance => {
                        if ( instance.Arg.indexOf(Info.Args[0] ) !== -1) {
                            varName1 = instance.Arg;
                            if (typeof instance.Value === String) {
                                var1.push(Number.Nan);
                                dates1.push(instance.Date);
                            } else {
                                var1.push(instance.Value);
                                dates1.push(instance.Date);
                            }
                        }
                    });
                    var larger = 1;
                    var Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const X1Label = Info.AxisLabels[0], YLabel = Info.AxisLabels[1], X2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    if ( QueryCurveOne === "Last Day" ) {
                        Var1Label = varName1
                    };
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
                        DoubleYAxis,
                        Var1Label,
                        Var2Label,
                        X1Label,
                        YLabel,
                        X2Label,
                        dates1, 
                        dates2, 
                        larger,
                        var1,
                        var2
                    }
                    res.send(Data);
                });
            } else if ( Info.Args[1] !== "" ) {
                model.find({ $or: [{ Arg: { $regex: Info.Args[0], $options: 'i' }}, {Arg: { $regex: Info.Args[1], $options: 'i' } }] }, (err, modelInstances) => {
                    var var1 = [], var2 = [], dates1 = [], dates2 = [], varName1 = "", varName2 = "";
                    modelInstances.forEach( instance => {
                        if ( instance.Arg.indexOf(Info.Args[0]) !== -1) {
                            varName1 = instance.Arg;
                            if (typeof instance.Value === String) {
                                var1.push(Number.Nan);
                                dates1.push(instance.Date);
                            } else {
                                var1.push(instance.Value);
                                dates1.push(instance.Date);
                            }
                        } else if ( instance.Arg.indexOf(Info.Args[1]) !== -1 ) {
                            varName2 = instance.Arg;
                            if (typeof instance.Value === String) {
                                var2.push(Number.Nan);
                                dates2.push(instance.Date);
                            } else {
                                var2.push(instance.Value);
                                dates2.push(instance.Date);
                            }
                        }
                    });
                    let larger;
                    if (dates2.length > 0) {
                        if (dates1.length >= dates2.length) {
                            larger = 1;
                        } else {
                            larger = 2;
                        }
                    } else {
                        larger = 1;
                    }
                    var Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const X1Label = Info.AxisLabels[0], YLabel = Info.AxisLabels[1], X2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    if ( QueryCurveOne === "Last Day" ) {
                        Var1Label = varName1
                    } else if ( QueryCurveTwo === "Last Day" ) {
                        Var2Label = varName2
                    };
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
                        DoubleYAxis,
                        Var1Label,
                        Var2Label,
                        X1Label,
                        YLabel,
                        X2Label,
                        dates1, 
                        dates2, 
                        larger,
                        var1,
                        var2
                    }
                    res.send(Data);
                });
            }
        } else if ( col === 'margins' || col === "monthlydrills" || col === "production" || col === "rates" ) {
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
                const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                const Data = {
                    OnlySingleVar,
                    DoubleXAxis,
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
        } else if ( col === "ovx" || col === "sector" ) {
            if ( QueryTF === "3 months" || QueryTF === "6 months" || QueryTF === "9 months" ) {
                var Limit = 0;
                switch(QueryTF) {
                    case "3 months":
                        Limit = 64;
                        break;
                    case "6 months":
                        Limit = 127;
                        break;
                    case "9 months":
                        Limit = 190;
                        break;
                };
                model.find({}).sort('-Date').limit(Limit).exec(function(err, modelInstances) {
                    var var1 = [], var2 = [], dates = [];
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
                    var1 = var1.reverse();
                    var2 = var2.reverse();
                    dates = dates.reverse();
                    const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
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
            } else if ( QueryTF === "1 year" || QueryTF === "2 years" || QueryTF === "5 years" || QueryTF === "All" ) {
                var Limit = 0;
                switch(QueryTF) {
                    case "1 year":
                        Limit = 53;
                        break;
                    case "2 years":
                        Limit = 105;
                        break;
                    case "5 years":
                        Limit = 261;
                        break;
                    case "All":
                        Limit = 10000;
                        break;
                };
                model.find({Timeframe: 'Weekly'}).sort('-Date').limit(Limit).exec(function(err, modelInstances) {
                    var var1 = [], var2 = [], dates = [];
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
                    var1 = var1.reverse();
                    var2 = var2.reverse();
                    dates = dates.reverse();
                    const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
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
                })
            }
        } else if ( col === "positions" ) {
            if ( QueryTF === "3 months" || QueryTF === "6 months" || QueryTF === "9 months" || QueryTF === "1 year" ) {
                var Limit = 0;
                switch(QueryTF) {
                    case "3 months":
                        Limit = 13;
                        break;
                    case "6 months":
                        Limit = 26;
                        break;
                    case "9 months":
                        Limit = 39;
                        break;
                    case "1 year":
                        Limit = 52;
                        break;
                };
                model.find({}).sort('-Date').limit(Limit).exec(function(err, modelInstances) {
                    var var1 = [], var2 = [], dates = [];
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
                    var1 = var1.reverse();
                    var2 = var2.reverse();
                    dates = dates.reverse();
                    const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
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
            } else if ( QueryTF === "2 years" || QueryTF === "5 years" || QueryTF === "All" ) {
                var Limit = 0;
                switch(QueryTF) {
                    case "2 years":
                        Limit = 25;
                        break;
                    case "5 years":
                        Limit = 61;
                        break;
                    case "All":
                        Limit = 10000;
                        break;
                };
                model.find({Timeframe: 'Monthly'}).sort('-Date').limit(Limit).exec(function(err, modelInstances) {
                    var var1 = [], var2 = [], dates = [];
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
                    var1 = var1.reverse();
                    var2 = var2.reverse();
                    dates = dates.reverse();
                    const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
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
                })
            }
        } else if ( col === "weeklydrills" ) {
            if ( QueryTF === "3 months" || QueryTF === "6 months" || QueryTF === "9 months" || QueryTF === "1 year" ) {
                var Limit = 0;
                switch(QueryTF) {
                    case "3 months":
                        Limit = 26;
                        break;
                    case "6 months":
                        Limit = 52;
                        break;
                    case "9 months":
                        Limit = 78;
                        break;
                    case "1 year":
                        Limit = 104;
                        break;
                };
                model.find({}).sort('-Date').limit(Limit).exec(function(err, modelInstances) {
                    var var1 = [], var2 = [], dates = [];
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
                    var1 = var1.reverse();
                    var2 = var2.reverse();
                    dates = dates.reverse();
                    const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
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
            } else if ( QueryTF === "2 years" || QueryTF === "5 years" || QueryTF === "All" ) {
                var Limit = 0;
                switch(QueryTF) {
                    case "2 years":
                        Limit = 50;
                        break;
                    case "5 years":
                        Limit = 122;
                        break;
                    case "All":
                        Limit = 20000;
                        break;
                };
                model.find({Timeframe: 'Monthly'}).sort('-Date').limit(Limit).exec(function(err, modelInstances) {
                    var var1 = [], var2 = [], dates = [];
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
                    var1 = var1.reverse();
                    var2 = var2.reverse();
                    dates = dates.reverse();
                    const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
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
                })
            }
        } else if ( col === "newsalgo" ) {
            if ( QueryTF === "3 months" || QueryTF === "6 months" || QueryTF === "9 months" ) {
                var Limit = 0;
                switch(QueryTF) {
                    case "3 months":
                        Limit = 64;
                        break;
                    case "6 months":
                        Limit = 127;
                        break;
                    case "9 months":
                        Limit = 190;
                        break;
                };
                model.find({}).sort('-Date').limit(Limit).exec(function(err, modelInstances) {
                    var var1 = [], var2 = [], dates = [];
                    modelInstances.forEach( instance => {
                        var1.push(instance.Value * 100);
                        var2.push(instance.Price);
                        dates.push(instance.Date);
                    });
                    var1 = var1.reverse();
                    var2 = var2.reverse();
                    dates = dates.reverse();
                    const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
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
            } else if ( QueryTF === "1 year" || QueryTF === "2 years" || QueryTF === "All" ) {
                var Limit = 0;
                switch(QueryTF) {
                    case "1 year":
                        Limit = 53;
                        break;
                    case "2 years":
                        Limit = 106;
                        break;
                    case "All":
                        Limit = 10000;
                        break;
                };
                model.find({Timeframe: 'Weekly'}).sort('-Date').limit(Limit).exec(function(err, modelInstances) {
                    var var1 = [], var2 = [], dates = [];
                    modelInstances.forEach( instance => {
                        var1.push(instance.Value * 100);
                        var2.push(instance.Price);
                        dates.push(instance.Date);
                    });
                    var1 = var1.reverse();
                    var2 = var2.reverse();
                    dates = dates.reverse();
                    const Var1Label = Info.Labels[0], Var2Label = Info.Labels[1];
                    const XLabel = Info.AxisLabels[0], Y1Label = Info.AxisLabels[1], Y2Label = Info.AxisLabels[2];
                    const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                    const Data = {
                        OnlySingleVar,
                        DoubleXAxis,
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
                })
            }
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
                const OnlySingleVar = Info.OnlySingleVar, DoubleYAxis= Info.DoubleYAxis, DoubleXAxis= Info.DoubleXAxis;
                const Data = {
                    OnlySingleVar,
                    DoubleXAxis,
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
