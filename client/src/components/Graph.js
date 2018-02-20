import * as React from "react";
import { Line, Doughnut, Pie, Polar, HorizontalBar } from "react-chartjs-2";

class Chart extends React.Component {
  render() {
    const { data, graphType, options } = this.props;
    //console.log("data: ", data);
    //console.log("options: ", options);

    const isLine = graphType === "Line";
    const isDoughnut = graphType === "Doughnut";
    const isPie = graphType === "Pie";
    const isPolar = graphType === "Polar";
    const isHorizontalBar = graphType === "HorizontalBar";
    //  options={options}
    return (
      <div>
        {Object.keys(data).length > 0 && (
          <div className="container" id="chart">
            {isLine && <Line data={data} options={options} />}
            {isDoughnut && <Doughnut data={data} />}
            {isPie && <Pie data={data} />}
            {isPolar && <Polar data={data} />}
            {isHorizontalBar && <HorizontalBar data={data} />}
          </div>
        )}
      </div>
    );
  }
}

export default Chart;
