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
  app.get("/api/get_data", (req, res) => {
    Data.find({}, (err, data) => {
      res.send(data);
    });
  });
  app.post("/api/:col", (req, res) => {
    console.log("req: ", req);
    const col = req.params.col.slice(9);
    let model;
    switch (col) {
      case "curve":
        model = Curve;
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
    }
    let Info;
    switch (col) {
      case "curve":
        Info = {
          Args: ["Curve"],
          Labels: ["Contract Price"],
          AxisLabels: ["Contracts", "Prices"],
          OnlySingleVar: "Yes",
          Searcheable: "No",
          DoubleYAxis: "No"
        };
        break;
      case "demand":
        Info = {
          Args: ["Worldwide Demand"],
          Labels: ["Demand"],
          AxisLabels: ["Date (Quarterly)", "M. Barrels Per Day"],
          OnlySingleVar: "Yes",
          Searcheable: "No",
          DoubleYAxis: "No"
        };
        break;
      case "margins":
        Info = {
          Args: ["WTI", "Brent"],
          Labels: ["WTI", "Brent"],
          AxisLabels: ["Date (Monthly)", "$ per Barrel"],
          OnlySingleVar: "No",
          Searcheable: "Yes",
          DoubleYAxis: "No"
        };
        break;
      case "monthlydrills":
        Info = {
          Args: ["Saudi Arabia", "Norway"],
          Labels: ["Saudi Arabia", "Norway"],
          AxisLabels: ["Date (Monthly)", "# of Drills"],
          OnlySingleVar: "No",
          Searcheable: "Yes",
          DoubleYAxis: "No"
        };
        break;
      case "newsalgo":
        Info = {
          Args: ["Algo", "Price"],
          Labels: ["News Algorithm", "Oil Returns"],
          AxisLabels: [
            "Date (Daily)",
            "% of Pos. News",
            "4-month Oil Returns (%)"
          ],
          OnlySingleVar: "No",
          Searcheable: "No",
          DoubleYAxis: "Yes"
        };
        break;
      case "ovx":
        Info = {
          Args: ["OVX"],
          Labels: ["OVX"],
          AxisLabels: ["Date (Daily)", "USO Expected Vol."],
          OnlySingleVar: "Yes",
          Searcheable: "No",
          DoubleYAxis: "No"
        };
        break;
      case "positions":
        Info = {
          Args: ["Longs", "Shorts"],
          Labels: ["Longs", "Shorts"],
          AxisLabels: ["Date (Weekly)", "# of Positions"],
          OnlySingleVar: "No",
          Searcheable: "No",
          DoubleYAxis: "No"
        };
        break;
      case "production":
        Info = {
          Args: ["Venezuela", "Mexico"],
          Labels: ["Venezuela", "Mexico"],
          AxisLabels: ["Date (Monthly)", "Daily Oil Production"],
          OnlySingleVar: "No",
          Searcheable: "Yes",
          DoubleYAxis: "No"
        };
        break;
      case "rates":
        Info = {
          Args: ["West Africa - US Gulf Coast", "Caribbean - US East Coast"],
          Labels: ["West Africa - US Gulf Coast", "Caribbean - US East Coast"],
          AxisLabels: ["Date (Monthly)", "$ per Barrel"],
          OnlySingleVar: "No",
          Searcheable: "Yes",
          DoubleYAxis: "No"
        };
        break;
      case "sector":
        Info = {
          Args: ["S&P Energy Sector"],
          Labels: ["S&P Energy Sector"],
          AxisLabels: ["Date (Daily)", "Index Points"],
          OnlySingleVar: "Yes",
          Searcheable: "No",
          DoubleYAxis: "No"
        };
        break;
      case "stocks":
        Info = {
          Args: ["OECD Stocks"],
          Labels: ["OECD Stocks"],
          AxisLabels: ["Date (Monthly)", "Millions of Barrels"],
          OnlySingleVar: "Yes",
          Searcheable: "No",
          DoubleYAxis: "No"
        };
        break;
      case "weeklydrills":
        Info = {
          Args: ["Canada", "US"],
          Labels: ["Canada", "US"],
          AxisLabels: ["Date (Weekly)", "# of Drills"],
          OnlySingleVar: "No",
          Searcheable: "No",
          DoubleYAxis: "No"
        };
        break;
    }

    model.find({}, (err, modelInstances) => {
      const var1 = [],
        var2 = [],
        dates = [];

      modelInstances.forEach(instance => {
        if (instance.Arg === Info.Args[0]) {
          if (typeof instance.Value === String) {
            var1.push(Number.Nan);
            dates.push(instance.Date);
          } else {
            var1.push(instance.Value);
            dates.push(instance.Date);
          }
        } else if (instance.Arg === Info.Args[1]) {
          if (typeof instance.Value === String) {
            var2.push(Number.Nan);
          } else {
            var2.push(instance.Value);
          }
        }
      });
      const Var1Label = Info.Labels[0],
        Var2Label = Info.Labels[1];
      const XLabel = Info.AxisLabels[0],
        Y1Label = Info.AxisLabels[1],
        Y2Label = Info.AxisLabels[2];
      const OnlySingleVar = Info.OnlySingleVar,
        Searcheable = Info.Searcheable,
        DoubleYAxis = Info.DoubleYAxis;
      const Data = {
        OnlySingleVar,
        Searcheable,
        DoubleYAxis,
        Var1Label,
        Var2Label,
        XLabel,
        Y1Label,
        Y2Label,
        dates,
        var1,
        var2
      };
      res.send(Data);
    });
  });
};
