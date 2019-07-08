import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class DonutChart extends Component {

    getChartData(){
        return {
          chartData:{
              labels: [
                'P&I',
                'Tax',
                'Insurance'
              ],
              datasets:[{
                data: [this.props.monthlyPayment, this.props.tax, this.props.insurance],
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
