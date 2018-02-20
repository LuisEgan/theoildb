import * as React from 'react';

class SelectArg extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Venezuela'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Arg: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Select Country:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Venezuela">Venezuela</option>
              <option value="Iraq">Iraq</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default SelectArg;