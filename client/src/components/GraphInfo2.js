import React, { Component } from "react";
import axios from "axios";
import Graph from "./Graph";
import SelectArg from "./SelectArg";
import { connect } from "react-redux";
import { getData } from "../actions";

class GraphInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentWillMount() {
    const { graphName } = this.props;
    let route;
    switch (graphName) {
      case "Curve":
        route = "/api/get_data_curve";
        break;
      case "Demand":
        route = "/api/get_data_demand";
        break;
      case "Margins":
        route = "/api/get_data_margins";
        break;
      case "MonthlyDrills":
        route = "/api/get_data_monthlydrills";
        break;
      case "NewsAlgo":
        route = "/api/get_data_newsalgo";
        break;
      case "OVX":
        route = "/api/get_data_ovx";
        break;
      case "Positions":
        route = "/api/get_data_positions";
        break;
      case "Production":
        route = "/api/get_data_production";
        break;
      case "Rates":
        route = "/api/get_data_rates";
        break;
      case "Sector":
        route = "/api/get_data_sector";
        break;
      case "Stocks":
        route = "/api/get_data_stocks";
        break;
      case "WeeklyDrills":
        route = "/api/get_data_weeklydrills";
        break;
      default:
        route = "/api/get_data_stocks";
        break;
    }

    axios.get(route).then(
      function(Data) {
        this.setState({ data: Data.data });
      }.bind(this)
    );
  }

  dataObject() {
    const { graphType } = this.props;
    let data = {};
    return data;
  }

  render() {
    const { info, graphName, graphType, description } = this.props;
    let { data } = this.state;
    const XLabel = data.XLabel;
    const Y1Label = data.Y1Label;
    const Y2Label = data.Y2Label;
    const OnlySingleVar = data.OnlySingleVar;
    const DoubleYAxis = data.DoubleYAxis;
    const Searcheable = data.Searcheable;
    let options = {};
    if (OnlySingleVar === "Yes") {
      console.log("Single Dataset Case");
      data = {
        labels: data.dates,
        datasets: [
          {
            label: data.Var1Label,
            data: data.var1,
            backgroundColor: "rgba(42, 145, 42, 0.2)",
            borderColor: "rgba(42, 145, 42, 1)",
            borderWidth: 1
          }
        ]
      };
      options = {
        scales: {
          yAxes: [
            {
              borderColor: "rgba(15, 15, 15, 1)",
              gridLines: { color: "rgba(15, 15, 15, 0.1)" },
              type: "linear",
              position: "left",
              scaleLabel: {
                display: true,
                fontColor: "rgba(15, 15, 15, 1)",
                labelString: Y1Label
              },
              ticks: { fontColor: "rgba(15, 15, 15, 1)" }
            }
          ],
          xAxes: [
            {
              borderColor: "rgba(15, 15, 15, 1)",
              gridLines: { color: "rgba(15, 15, 15, 0.1)" },
              scaleLabel: {
                display: true,
                fontColor: "rgba(15, 15, 15, 1)",
                labelString: XLabel
              },
              ticks: { fontColor: "rgba(15, 15, 15, 1)" }
            }
          ]
        }
      };
    } else if (OnlySingleVar === "No" && DoubleYAxis === "No") {
      console.log("Two Datasets Case");
      data = {
        labels: data.dates,
        datasets: [
          {
            label: data.Var1Label,
            data: data.var1,
            backgroundColor: "rgba(42, 145, 42, 0.2)",
            borderColor: "rgba(42, 145, 42, 1)",
            borderWidth: 1
          },
          {
            label: data.Var2Label,
            data: data.var2,
            backgroundColor: "rgba(145,40, 40, 0.2)",
            borderColor: "rgba(145, 40, 40,1)",
            borderWidth: 1
          }
        ]
      };
      options = {
        scales: {
          yAxes: [
            {
              borderColor: "rgba(15, 15, 15, 1)",
              gridLines: { color: "rgba(15, 15, 15, 0.1)" },
              type: "linear",
              position: "left",
              scaleLabel: {
                display: true,
                fontColor: "rgba(15, 15, 15, 1)",
                labelString: Y1Label
              },
              ticks: { fontColor: "rgba(15, 15, 15, 1)" }
            }
          ],
          xAxes: [
            {
              borderColor: "rgba(15, 15, 15, 1)",
              gridLines: { color: "rgba(15, 15, 15, 0.1)" },
              scaleLabel: {
                display: true,
                fontColor: "rgba(15, 15, 15, 1)",
                labelString: XLabel
              },
              ticks: { fontColor: "rgba(15, 15, 15, 1)" }
            }
          ]
        }
      };
    } else if (OnlySingleVar === "No" && DoubleYAxis === "Yes") {
      console.log("News Algo Case!!!");
      data = {
        labels: data.dates,
        datasets: [
          {
            label: data.Var1Label,
            data: data.var1,
            yAxisID: "A",
            backgroundColor: "rgba(42, 145, 42, 0.2)",
            borderColor: "rgba(42, 145, 42, 1)",
            borderWidth: 1
          },
          {
            label: data.Var2Label,
            data: data.var2,
            yAxisID: "B",
            backgroundColor: "rgba(145,40, 40, 0.2)",
            borderColor: "rgba(145, 40, 40,1)",
            borderWidth: 1
          }
        ]
      };
      options = {
        scales: {
          yAxes: [
            {
              borderColor: "rgba(15, 15, 15, 1)",
              gridLines: { color: "rgba(15, 15, 15, 0.1)" },
              id: "A",
              type: "linear",
              position: "left",
              scaleLabel: {
                display: true,
                fontColor: "rgba(15, 15, 15, 1)",
                labelString: Y1Label
              },
              ticks: { fontColor: "rgba(15, 15, 15, 1)" }
            },
            {
              borderColor: "rgba(15, 15, 15, 1)",
              gridLines: { color: "rgba(15, 15, 15, 0.1)" },
              id: "B",
              type: "linear",
              position: "right",
              scaleLabel: {
                display: true,
                fontColor: "rgba(15, 15, 15, 1)",
                labelString: Y2Label
              },
              ticks: { fontColor: "rgba(15, 15, 15, 1)" }
            }
          ],
          xAxes: [
            {
              borderColor: "rgba(15, 15, 15, 1)",
              gridLines: { color: "rgba(15, 15, 15, 0.1)" },
              scaleLabel: {
                display: true,
                fontColor: "rgba(15, 15, 15, 1)",
                labelString: XLabel
              },
              ticks: { fontColor: "rgba(15, 15, 15, 1)" }
            }
          ]
        }
      };
    }
    
    if (Searcheable === 'Yes') {
        return (
            <div className="container graphInfo">
            <div className="row">
                <div className="col-sm-12 cc">{info}</div>

                <div className="col-sm-12 cc">
                <SelectArg />
                </div>

                <div className="col-sm-12 cc">
                <Graph data={data} graphType={graphType} options={options} />
                </div>

                <div className="col-sm-12 cc">{description}</div>
            </div>
            </div>
        );
    }
    return (
        <div className="container graphInfo">
        <div className="row">
            <div className="col-sm-12 cc">{info}</div>

            <div className="col-sm-12 cc">
            <Graph data={data} graphType={graphType} options={options} />
            </div>

            <div className="col-sm-12 cc">{description}</div>
        </div>
        </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getData })(GraphInfo);
