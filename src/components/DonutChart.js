import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class DonutChart extends Component {

    getChartData(){
        return {
          chartData:{
              labels: [
                `Principal & Interest: $${this.props.principalInterest}`,
                `Tax: $${this.props.tax}`,
                `Insurance: $${this.props.insurance}`
              ],
              datasets:[{
                data: [this.props.principalInterest, this.props.tax, this.props.insurance,],
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
              }]
          }
        }
      }

  render() {
    return (
      <div>
       <Doughnut data={this.getChartData().chartData} />
     </div>
    );
  }

}

export default DonutChart;
