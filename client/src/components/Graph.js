import * as React from 'react';
import {
    Line,
    Doughnut,
    Pie,
    Polar,
    HorizontalBar
} from 'react-chartjs-2';

class Chart extends React.Component {

    render() {
        const { data, graphType} = this.props;

        const isLine = graphType === "Line";
        const isDoughnut = graphType === "Doughnut";
        const isPie = graphType === "Pie";
        const isPolar = graphType === "Polar";
        const isHorizontalBar = graphType === "HorizontalBar";

        return (
            <div className="container" id="chart">
                {(isLine) && (<Line data={data} />)}
                {(isDoughnut) && (<Doughnut data={data} />)}
                {(isPie) && (<Pie data={data} />)}
                {(isPolar) && (<Polar data={data} />)}
                {(isHorizontalBar) && (<HorizontalBar data={data} />)}
            </div>
        );
    }
}

export default Chart;