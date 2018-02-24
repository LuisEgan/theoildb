import React, { Component } from 'react';
//import { Script } from 'vm';
//import GraphInfo from './GraphInfo';

class About extends Component {

  componentDidMount() {
    document.querySelectorAll('.response').forEach(function(item, i){
      item.classList.remove("fixed-height");
      var height = item.clientHeight;
      item.setAttribute("data-height", height);
      item.classList.add("fixed-height");
    });
  
    document.querySelectorAll("input[name=question]").forEach(function(item, i) {
      item.addEventListener("change" , function(){
          document.querySelectorAll("p.response").forEach(function(element, j){
              element.classList.add("fixed-height");
          });
      item.nextElementSibling.nextElementSibling.classList.remove("fixed-height");
      });
    });
    
    document.querySelectorAll('.response').forEach(function(item, i){
      item.classList.remove("fixed-height");
      var height = item.clientHeight;
      item.setAttribute("data-height", height);
      item.classList.add("fixed-height");
    });
  }

  render() {
    return (
      <section id='text'>
        <h1> About </h1>
        <input className="animate" type="radio" name="question" id="q1"/>
        <label className="animate" htmlFor="q1">Q: What is TheOilDB?</label>
        <p className="response animate" id="r1">
        A: TheOilDB is a data science project created by Jesus Rangel, with the help of Luis Egan and Tomas Rodriguez, to gather in one place the main variables that affect the price of oil
        in the international markets.
        </p>

        <input className="animate" type="radio" name="question" id="q2"/>
        <label className="animate" htmlFor="q2">Q: Which Technology Stack do you use?</label>
        <p className="response animate" id="r2">
        A: The data is gathered, organized, cleaned, and saved to a local and production database using python.
        The website and the charts are made using Node and React querying the data from a remote server.
        </p>

        <input className="animate" type="radio" name="question" id="q3"/>
        <label className="animate" htmlFor="q3">Q: How does the News Algorithm works?</label>
        <p className="response animate">
        A: Oil related news and headlines are gathered and saved to the database from different sources.
        Using many different natural language processing libraries and home-made functions, the articles are analyzed one by one and tagged "positive" or "negative".
        They are also tagged according to the time frame in which they happen and the probability of ocurring.
        <br/>
        <br/>
        For any given day the value that we show in our website is calculated as follows: (sum of positive and negative news for the last 120 days) / (sum of positive news for the last 120 days).
        The 120 days averaging is made to reduce the volatility in the percentage showed and because in the oil industry a single day of good or bad news does not have a major effect in the long term price.
        (Even OPEC announcements do not move the long term price if not accompained later by news about lower/higher production).
        Depending on the time frame and probability previously calculated, some articles may have a lower weight when calculating the percentage.
        </p>

        <input className="animate" type="radio" name="question" id="q4"/>
        <label className="animate" htmlFor="q4">Q: Is your data public?</label>
        <p className="response animate">
        A: Except for the News Index, all the data showed in our website is publicly available online. The news, headlines and articles used to calculate the News Index are also publicly available online.
        </p>

        <input className="animate" type="radio" name="question" id="q5"/>
        <label className="animate" htmlFor="q5"> Q: How can I contact TheOilDB?</label>
        <p className="response animate">
        A: For inquiries we are using a temporary email: theoildb@gmail.com
        <br/>
        For information about the owners check the next question.
        </p>

        <input className="animate" type="radio" name="question" id="q6"/>
        <label className="animate" htmlFor="q6"> About the creators of TheOilDB</label>
        <p className="response animate">
        • Jesus Rangel: Economist and Data Scientist, creator of TheOilDB. Everything related to the data and algorithms side of the project.
        Currently works as a free-lancer and looking for new challenges. For contact: <a href="https://www.linkedin.com/in/jesus-rangel-477668a1">Linkedin Profile</a>
        <br/>
        <br/>
        • Luis Egan: Full-stack Web Developer and Virtual Reality Programmer. Built all the back-end of the website including connections with the databases.
        Currently works as Lead Front-end Developer at Advir. For contact: <a href="https://www.linkedin.com/in/luis-egan-565401127/">Linkedin Profile</a>
        </p>

        <input className="animate" type="radio" name="question" id="q7"/>
        <label className="animate" htmlFor="q7">Coming Soon</label>
        <p className="response animate">
        New features and charts will be added to the website during the next months including:
        <br/>
        • An entire new website for cryptocurrencies! TheCryptosDB coming soon including all kind of data and its own News Index!
        <br/>
        • A prediction section! Home-made machine learning and neural network models that will use all of our data to predict the price of oil and publish the results online.
        <br/>
        • A choropleth map showing where are the news and healines coming from everyday.
        <br/>
        • New data sources including the US Energy Information Administration.
        <br/>
        • More news sources for our Index.
        <br/>
        • More financial indexes.
        <br/>
        • And many new charts to make data visualization better.
        </p>

        <input className="animate" type="radio" name="question" id="q8"/>
        <label className="animate" htmlFor="q8">Disclaimer</label>
        <p className="response animate">
        The creators of this project do not currently own or trade any financial securities related to energy commodities, including but not limited to: stocks, bonds, funds or financial derivatives.
        <br/>
        They also do not work nor are clients or offer any kind of financial advise to companies or individuals involved in the previously mentioned activities.
        <br/>
        The data in this website can be subject to change without notice.
        <br/>
        TheOilDB nor the creators of this website are responsible for financial activities held by third-parties using the information here presented.
        </p>

        <input className="animate" type="radio" name="question" id="q9"/>
        <label className="animate" htmlFor="q9">Donate!</label>
        <p className="response animate">
        Your donation can make the difference, all amounts are greatly appreciated!
        <br/>
        <br/>
        • BTC Address: 1P26GRXhHBNyyU25DQzBTGHQJqpCG6e1dW
        <br/>
        • LTC Address: LiEoe3hfTChKu5e2GoTJS1xB8bmvgFgMCU
        <br/>
        • BCH Address: qrcc09phx9veqhu44una80j8fca98mq2j53yn4xxv0
        <br/>
        • ETH Address: 0x6e48bc41d68dA4cB249F9336Bf32f0f5D724F571
        </p>
      </section>
    );
  }
}

export default About;
