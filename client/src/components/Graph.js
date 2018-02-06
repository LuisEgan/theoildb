import * as React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {

    render() {
        const { data } = this.props;        
        return (
            <div className="container" id="chart">
                <Line data={data} />
            </div>
        );
    }
}

export default Chart;