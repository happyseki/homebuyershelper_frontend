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
                'Red',
                'Green',
                'Yellow'
              ],
              datasets:[{
                data: [this.props.getMonthlyPayment(), this.props.tax, this.props.insurance],
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
                text: 'Hey'
              }]
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
