import * as React from 'react';

class SelectCurve extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('Arg: ' + this.state.value);
      event.preventDefault();
      this.props.handlerFromCurve(this.state.value);
    }
  
    render() {
        if (this.props.graphName === "Curve" ){
            return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Select Timeframe: 
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="">(Month)</option>
                    <option value="2018-02-21">2018-02-21</option>
                    <option value="2018-02-16">2018-02-16</option>
                    <option value="2018-02-1">2018-02-12</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            );
        }
    }
}

export default SelectCurve;