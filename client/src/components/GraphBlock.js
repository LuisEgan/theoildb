import React, { Component } from "react";
import SelectArgOne from "./SelectArgOne";
import SelectArgTwo from "./SelectArgTwo";
import GraphInfo from "./GraphInfo";

class GraphBlock extends Component {
  constructor(props) {
    super(props);
    this.handleDataOne = this.handleDataOne.bind(this);
    this.handleDataTwo = this.handleDataTwo.bind(this);
    this.state = {
      fromChildOne: "",
      fromChildTwo: ""
    };
  }

  handleDataOne(resultOne) {
    this.setState({
      fromChildOne: resultOne
    });
  }

  handleDataTwo(resultTwo) {
    this.setState({
      fromChildTwo: resultTwo
    });
  }

  render() {
    const { Searchable } = this.props;
    const { info } = this.props;
    const { graphName } = this.props;
    const { graphType } = this.props;
    const { description } = this.props;
    if (Searchable === 'Yes') {
        return (
          <div className="container graphBlock">
            <div className="row">
                <div className="col-sm-12 cc Info">{info}</div>

                <div className="col-sm-12 cc SelectArg">
                  <SelectArgOne handlerFromParentOne={this.handleDataOne} graphName={graphName}/>
                </div>
                <div className="col-sm-12 cc SelectArg">
                  <SelectArgTwo handlerFromParentTwo={this.handleDataTwo} graphName={graphName}/>
                </div>

                <div className="col-sm-12 cc GraphInfo">
                  <GraphInfo graphName={graphName} graphType={graphType} ArgumentOne={this.state.fromChildOne} ArgumentTwo={this.state.fromChildTwo}/>
                </div>
                  {/* <h5>Received in BlockOne:<br />{this.state.fromChildOne}</h5> */}
                  {/* <h5>Received in BlockTwo:<br />{this.state.fromChildTwo}</h5> */}
                <div className="col-sm-12 cc Description">{description}</div>
            </div>
          </div>
        );
    }
    return (
      <div className="container graphBlock">
        <div className="row">
          <div className="col-sm-12 cc Info">{info}</div>

          <div className="col-sm-12 cc GraphInfo">
            <GraphInfo graphName={graphName} graphType={graphType} Argument={this.state.fromChild}/>
          </div>
          <div className="col-sm-12 cc Description">{description}</div>
        </div>
      </div>
    );
  } 
}

export default GraphBlock;
