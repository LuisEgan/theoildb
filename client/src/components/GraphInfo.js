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
    // const { getData } = this.props;
    // getData();
    axios.get('/api/get_data_coll2').
      then( function({data}) {
        this.setState({ data });
      }.bind(this));
  }
  
  render() {
    let { data } = this.state;
    console.log(data);
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
                <Graph data={data}/>
            </div>
            
            <div className="col-sm-6 cc">
                INFO
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps, { getData })(GraphInfo);
