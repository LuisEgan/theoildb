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
      case "HEHEHE":
        route = '/api/get_data_coll2';
        break;
      case "PAPI":
        route = '/api/get_data_coll';
        break;
      case "MMM":
        route = '/api/get_data_ui';
        break;
      case "HE":
        route = '/api/get_data_DICK';
        break;
    }

    axios.get(route).
      then( function({data}) {
        this.setState({ data });
      }.bind(this) );
  }
  
  render() {
    const { info, graphName, graphType} = this.props;
    let { data } = this.state;
    
    const Dates = data.map( d => {
      return d.Date;
    });
    const Values = data.map( d => {
      return d.Value;
    });

    data = {
      labels: Dates,
      datasets: [
        {
          label: 'Values',
          data: Values,
          backgroundColor: 'rgba(204, 51, 0, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
        }
      ]
    }

    return (
      <div className="container graphInfo">
        <div className="row">
            <div className="col-sm-6 cc">
                <Graph data={data} graphType={graphType}/>
            </div>
            
            <div className="col-sm-6 cc">
                {info}
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps, { getData })(GraphInfo);
