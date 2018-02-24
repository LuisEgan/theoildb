import * as React from 'react';


class SelectArgTwo extends React.Component {
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
      this.props.handlerFromParentTwo(this.state.value);
    }
  
    render() {
      if (this.props.graphName === "Margins"){
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Select Basket (Red): 
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">(Basket)</option>
                <option value="Arab Heavy (EU)">A Heavy (EU)</option>
                <option value="Bonny (US)">Bonny (US)</option>
                <option value="Brent (EU)">Brent (EU)</option>
                <option value="Brent (US)">Brent (US)</option>
                <option value="Dubai (EU)">Dubai (EU)</option>
                <option value="Dubai (Singapore)">Dubai (Sing.)</option>
                <option value="Kuwait (US)">Kuwait (US)</option>
                <option value="LLS (US)">LLS (US)</option>
                <option value="Merey (US)">Merey (US)</option>
                <option value="Minas (Singapore)">Minas (Sing.)</option>
                <option value="Oman (Singapore)">Oman (Sing.)</option>
                <option value="WTI (US)">WTI (US)</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      } else if (this.props.graphName === "MonthlyDrills") {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Select Country (Red): 
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">(Country)</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Africa">Africa</option>
                <option value="Algeria">Algeria</option>
                <option value="Angola">Angola</option>
                <option value="Argentina">Argentina</option>
                <option value="Asia Pacific">Asia Pacific</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Congo">Congo</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Denmark">Denmark</option>
                <option value="Dubai">Dubai</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="Europe">Europe</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Germany">Germany</option>
                <option value="Greece">Greece</option>
                <option value="Hungary">Hungary</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Latin America">Latin America</option>
                <option value="Libya">Libya</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Middle East">Middle East</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Norway">Norway</option>
                <option value="Offshore China">Offshore China</option>
                <option value="Oman">Oman</option>
                <option value="Other Africa">Other Africa</option>
                <option value="Other Europe">Other Europe</option>
                <option value="Other Far East">Other Far East</option>
                <option value="Other Latin America">Other Latin America</option>
                <option value="Other Middle East">Other Middle East</option>
                <option value="PNG">PNG</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Peru">Peru</option>
                <option value="Phillippines">Phillippines</option>
                <option value="Poland">Poland</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sudan">Sudan</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Thailand">Thailand</option>
                <option value="Trinidad">Trinidad</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="UK">UK</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="World">World</option>
                <option value="Yemen">Yemen</option>
                <option value="Yugoslavia and Croatia">Yugoslavia and Croatia</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      } else if (this.props.graphName === "Production") {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Select Country (Red): 
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">(Country)</option>
                <option value="Algeria">Algeria</option>
                <option value="Angola">Angola</option>
                <option value="Argentina">Argentina</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="ExUSSR ExclRussia">ExUSSR ExclRussia</option>
                <option value="Gabon">Gabon</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Libya">Libya</option>
                <option value="Libya SPAJ">Libya SPAJ</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Mexico">Mexico</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Norway">Norway</option>
                <option value="OPEC 10">OPEC 10</option>
                <option value="OPEC 11">OPEC 11</option>
                <option value="OPEC 12">OPEC 12</option>
                <option value="OPEC ExclIraq">OPEC ExclIraq</option>
                <option value="Qatar">Qatar</option>
                <option value="Russia">Russia</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Total OPEC">Total OPEC</option>
                <option value="Total Products">Total Products</option>
                <option value="UAE">UAE</option>
                <option value="UK">UK</option>
                <option value="US">US</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      } else if (this.props.graphName === "Rates") {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Select Route (Red): 
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">(Rate)</option>
                <option value="Caribbean - US East Coast">Carib - US EC</option>
                <option value="Mediterranean - Mediterranean">Med - Med</option>
                <option value="Middle East - East">MidEast - East</option>
                <option value="Middle East - West">MidEast - West</option>
                <option value="West Africa - US Gulf Coast">WAfrica - US GC</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
  }

export default SelectArgTwo;