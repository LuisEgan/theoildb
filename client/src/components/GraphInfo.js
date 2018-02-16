import React, { Component } from 'react';
import axios from 'axios';
import Graph from './Graph';
import { connect } from 'react-redux';
import { getData } from '../actions';

class GraphInfo extends Component {
  
  constructor(props){
    super(props);
  
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    const { graphName } = this.props;
    let route;
    switch( graphName ) {
      case "Curve":
        route = '/api/get_data_curve';
        break;
      case "Demand":
        route = '/api/get_data_demand';
        break;
      case "Margins":
        route = '/api/get_data_margins';
        break;
      case "MonthlyDrills":
        route = '/api/get_data_monthlydrills';
        break;
      case "NewsAlgo":
        route = '/api/get_data_newsalgo';
        break;
      case "OVX":
        route = '/api/get_data_ovx';
        break;
      case "Positions":
        route = '/api/get_data_positions';
        break;
      case "Production":
        route = '/api/get_data_production';
        break;
      case "Rates":
        route = '/api/get_data_rates';
        break;
      case "Sector":
        route = '/api/get_data_sector';
        break;
      case "Stocks":
        route = '/api/get_data_stocks';
        break;
      case "WeeklyDrills":
        route = '/api/get_data_weeklydrills';
        break;
      default:
        route = '/api/get_data_stocks';
        break;
    }

    axios.get(route)
      .then( function(Data) {
        this.setState({ data: Data.data });
      }.bind(this) );
  }

  dataObject() {
    // const { graphType } = this.props;
    let data = {};

    return data;
  }
  
  render() {
    const { info, graphName } = this.props;
    let { data } = this.state;

//    const Dates = data.dates.map( d => {
//      return d.dates;
//    });
//    const Values = data.longs.map( d => {
//      return d.longs;
//    });

    data = {
      labels: data.dates,
      datasets: [
        {
          label: data.labela,
          data: data.var1,
          backgroundColor: 'rgba(42, 145, 42, 0.2)',
          borderColor: 'rgba(42, 145, 42, 1)',
          borderWidth: 1
        },
        {
          label: data.labelb,
          data: data.var2,
          backgroundColor: 'rgba(145,40, 40, 0.2)',
          borderColor: 'rgba(145, 40, 40,1)',
          borderWidth: 1
        }  
      ]
    }

    // data = this.dataObject(graphType);

    return (
      <div className="container graphInfo">
        <div className="row">
            <div className="col-sm-12 cc">
                <Graph data={data} graphType={graphType}/>
            </div>
            
            <div className="col-sm-12 cc">
                {info}
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps, { getData })(GraphInfo);
