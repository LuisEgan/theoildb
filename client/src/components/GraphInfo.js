import React, { Component } from "react";
import axios from "axios";
import Graph from "./Graph";
import { connect } from "react-redux";
import { getData } from "../actions";

class GraphInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataChanges: -1.0,
      PropsChanges: 0.0,
      data: []
    };
  }

  componentWillReceiveProps(nextProps, nextState){
    this.setState({PropsChanges: this.state.PropsChanges + 1.0});
  }

  shouldComponentUpdate(nextProps, nextState){
    //console.log("Should State DataChanges: " + this.state.DataChanges + " // " + nextState.DataChanges);
    //console.log("Should State PropsChanges: " + this.state.PropsChanges + " // " + nextState.PropsChanges);
    if (this.state.DataChanges !== nextState.DataChanges || this.state.PropsChanges !== nextState.PropsChanges) {
      return nextState.DataChanges - nextState.PropsChanges < 1.0
    } 
    return false;
  }

  dataObject() {
    const { graphType } = this.props;
    let data = {};
    return data;
  }

  render() {
    //console.log("Axios: " + this.props.ArgumentOne + " // " + this.props.ArgumentTwo);
    const { ArgumentOne } = this.props;
    const { ArgumentTwo } = this.props;
    const { CurveOne } = this.props;
    const { CurveTwo } = this.props;
    const { TimeFrame } = this.props;
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
    axios.post(route, {
      QueryOne: this.props.ArgumentOne,
      QueryTwo: this.props.ArgumentTwo,
      QueryTF: this.props.TimeFrame,
      QueryCurveOne: this.props.CurveOne,
      QueryCurveTwo: this.props.CurveTwo,
    })
    .then(
      function(Data) {
        this.setState({
          data: Data.data,
          DataChanges: this.state.DataChanges + 0.5,
        });
      }.bind(this)
    );
    const { graphType } = this.props;
    let { data } =  this.state;
    const larger = data.larger;
    const XLabel = data.XLabel;
    const Y1Label = data.Y1Label;
    const Y2Label = data.Y2Label;
    const X1Label = data.X1Label;
    const YLabel = data.YLabel;
    const X2Label = data.X2Label;
    const OnlySingleVar = data.OnlySingleVar;
    const DoubleYAxis = data.DoubleYAxis;
    const DoubleXAxis = data.DoubleXAxis;
    let options = {};
    if (OnlySingleVar === "Yes") {
      //console.log("Single Dataset Case");
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
    } else if (OnlySingleVar === "No" && DoubleYAxis === "No" && DoubleXAxis === "No") {
      //console.log("Two Datasets Case");
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
    } else if (OnlySingleVar === "No" && DoubleYAxis === "Yes" && DoubleXAxis === "No") {
      //console.log("News Algo Case!!!");
      data = {
        labels: data.dates1,
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
    } else if (OnlySingleVar === "No" && DoubleYAxis === "No" && DoubleXAxis === "Yes") {
      const bottomdates = data.dates1
      const topdates = data.dates2
      var numberArray = [];
      let max;
      if (larger === 1) {
        max = bottomdates.length;
      } else if (larger === 2) {
        max = topdates.length;
      }
      for(var i = 1; i <= max; i++){
        numberArray.push(i);
      }
      numberArray = numberArray.slice(0, max+1);
      //console.log(numberArray);
      data = {
        labels: numberArray,
        datasets: [
          {
            label: data.Var1Label,
            data: data.var1,
            spanGaps: true,
            xAxisID: "A",
            backgroundColor: "rgba(42, 145, 42, 0.2)",
            borderColor: "rgba(42, 145, 42, 1)",
            borderWidth: 1
          },
          {
            label: data.Var2Label,
            data: data.var2,
            spanGaps: true,
            xAxisID: "B",
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
                labelString: YLabel
              },
              ticks: { 
                fontColor: "rgba(15, 15, 15, 1)"

              }
            }
          ],
          xAxes: [
            {
              borderColor: "rgba(15, 15, 15, 1)",
              gridLines: { color: "rgba(15, 15, 15, 0.1)" },
              id: "A",
              position: "bottom",
              scaleLabel: {
                display: true,
                fontColor: "rgba(15, 15, 15, 1)",
                labelString: X1Label
              },
              ticks: {
                fontColor: "rgba(15, 15, 15, 1)",
                callback: function(value, index, values) {
                    return bottomdates[value-1];
                }
              }
            }, {
              borderColor: "rgba(15, 15, 15, 1)",
              gridLines: { color: "rgba(15, 15, 15, 0.1)" },
              id: "B",
              position: "top",
              scaleLabel: {
                display: true,
                fontColor: "rgba(15, 15, 15, 1)",
                labelString: X2Label
              },
              ticks: {
                fontColor: "rgba(15, 15, 15, 1)",
                callback: function(value, index, values) {
                    return topdates[value-1];
                }
              }
            }
          ]
        }
      };
    }
    return (
        <div className="col-sm-12 cc">
          <Graph data={data} graphType={graphType} options={options} />
          {/*<h5>Received by InfoOne:<br />{this.props.CurveOne}</h5> */}
          {/*<h5>Received by InfoTwo:<br />{this.props.CurveTwo}</h5> */}
          {/* <h5>Received from Parent:<br />{this.props.TimeFrame}</h5> */}
        </div>
    );
  } 
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getData })(GraphInfo);
