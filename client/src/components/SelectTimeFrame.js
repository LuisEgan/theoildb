import * as React from 'react';

class SelectTimeFrame extends React.Component {
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
      this.props.handlerFromTimeFrame(this.state.value);
    }
  
    render() {
        if (this.props.graphName === "OVX" || this.props.graphName === "Sector" || this.props.graphName === "NewsAlgo"){
            return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Select Timeframe: 
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="">(Timeframe)</option>
                    <option value="3 months">3 months (Daily)</option>
                    <option value="6 months">6 months (Daily)</option>
                    <option value="9 months">9 months (Daily)</option>
                    <option value="1 year">1 year (Weekly)</option>
                    <option value="2 years">2 years (Weekly)</option>
                    <option value="All">All (Weekly)</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            );
        }
    }
}

export default SelectTimeFrame;