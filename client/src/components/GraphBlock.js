import React, { Component } from "react";
import SelectArgOne from "./SelectArgOne";
import SelectArgTwo from "./SelectArgTwo";
import SelectTimeFrame from "./SelectTimeFrame";
import SelectCurveOne from "./SelectCurveOne";
import SelectCurveTwo from "./SelectCurveTwo";
import GraphInfo from "./GraphInfo";

class GraphBlock extends Component {
  constructor(props) {
    super(props);
    this.handleDataOne = this.handleDataOne.bind(this);
    this.handleDataTwo = this.handleDataTwo.bind(this);
    this.handleTimeFrame = this.handleTimeFrame.bind(this);
    this.handleCurveOne = this.handleCurveOne.bind(this);
    this.handleCurveTwo = this.handleCurveTwo.bind(this);
    this.state = {
      fromChildOne: "",
      fromChildTwo: "",
      fromChildTF: "",
      fromChildCurveOne: "",
      fromChildCurveTwo: "",
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

  handleTimeFrame(resultTF) {
    this.setState({
      fromChildTF: resultTF
    });
  }

  handleCurveOne(resultCurveOne) {
    this.setState({
      fromChildCurveOne: resultCurveOne
    });
  }

  handleCurveTwo(resultCurveTwo) {
    this.setState({
      fromChildCurveTwo: resultCurveTwo
    });
  }

  render() {
    const { Searchable } = this.props;
    const { info } = this.props;
    const { graphName } = this.props;
    const { graphType } = this.props;
    const { description } = this.props;
    if (Searchable === 'Arg') {
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
    if (Searchable === 'Time') {
      return (
        <div className="container graphBlock">
          <div className="row">
              <div className="col-sm-12 cc Info">{info}</div>

              <div className="col-sm-12 cc SelectArg">
                <SelectTimeFrame handlerFromTimeFrame={this.handleTimeFrame} graphName={graphName}/>
              </div>

              <div className="col-sm-12 cc GraphInfo">
                <GraphInfo graphName={graphName} graphType={graphType} TimeFrame={this.state.fromChildTF}/>
              </div>
                {/* <h5>Received in TF:<br />{this.state.fromChildTF}</h5> */}
              <div className="col-sm-12 cc Description">{description}</div>
          </div>
        </div>
      );
    }
    if (Searchable === 'FCurve') {
      return (
        <div className="container graphBlock">
          <div className="row">
              <div className="col-sm-12 cc Info">{info}</div>

              <div className="col-sm-12 cc SelectArg">
                <SelectCurveOne handlerFromCurveOne={this.handleCurveOne} graphName={graphName}/>
              </div>

              <div className="col-sm-12 cc SelectArg">
                <SelectCurveTwo handlerFromCurveTwo={this.handleCurveTwo} graphName={graphName}/>
              </div>

              <div className="col-sm-12 cc GraphInfo">
                <GraphInfo graphName={graphName} graphType={graphType} CurveOne={this.state.fromChildCurveOne} CurveTwo={this.state.fromChildCurveTwo}/>
              </div>
                {/*<h5>Received in CurveOne:<br />{this.state.fromChildCurveOne}</h5>*/}
                {/*<h5>Received in CurveTwo:<br />{this.state.fromChildCurveTwo}</h5>*/}
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
