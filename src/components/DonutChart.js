import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class DonutChart extends Component {
    constructor(props){
    super(props);
    this.state = {
      chartData:{}
    }
  }

    componentWillMount(){
      this.getChartData();
    }

    getChartData(){
        this.setState({
          chartData:{
              labels: [
                'P&I',
                'Tax',
                'Insurance'
              ],
              datasets:[{
                data: [this.props.displayPayment, this.props.tax, this.props.insurance],
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
                ],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
                ],
              }],
            text: '23%'
          }
        });
      }

  render() {
    return (
      <div>
       <Doughnut data={this.state.chartData} />
     </div>
    );
  }

}

export default DonutChart;
