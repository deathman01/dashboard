import React, {Component} from 'react';
import './cssfile.css';
import {Bar, Line, Pie } from 'react-chartjs-2';
const dataSet=[];
class Chart extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataSet: []
        }
    }
    componentWillMount() {
        this.setState({dataSet: [
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 2,
                orderValue : 300,
            },
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 120,
                newOrderValue : 300,
                visitBeforePurchase: 1,
                orderValue : 420,
            },
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 200,
                newOrderValue : 250,
                visitBeforePurchase: 2,
                orderValue : 450,
            },
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 600,
                newOrderValue : 300,
                visitBeforePurchase: 1 ,
                orderValue : 900,
            },
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 600,
                visitBeforePurchase: 21,
                orderValue : 700,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 1000,
                newOrderValue : 200,
                visitBeforePurchase: 65,
                orderValue : 1200,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 300,
                visitBeforePurchase: 20,
                orderValue : 400,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 100,
                visitBeforePurchase: 2,
                orderValue : 200,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 200,
                newOrderValue : 200,
                visitBeforePurchase: 15,
                orderValue : 400,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 15,
                orderValue : 300,
            },
        ]});
    }
    render() {
        var totalOrder=0;
        var totalSale=0;
        var totalOrderNew=0;
        var totalOrderOld=0;
        var totalOrderNewVal=0;
        var totalOrderOldVal=0;

        for(let i=0;i<dataSet.length; i++){
            if(dataSet[i].new === true){
                totalOrderNew+=dataSet[i].newOrder;
                totalOrderNewVal+=dataSet[i].orderValue;
            }else{
                totalOrderOld+=dataSet[i].newOrder;
                totalOrderOldVal+=dataSet[i].orderValue;
            }
            totalOrder+=dataSet[i].newOrder;
            totalSale+= dataSet[i].orderValue;
            console.log(this.totalOrderOldVal);
        }
        const data1st = {
            labels: [
              '%New', '%Repeat'
            ],
            datasets: [
              {
                label: 'Totalsale',
                data: [totalOrderNew,totalOrderOld],
                //fill: false,          // Don't fill area under the line
                //borderColor: 'green'  // Line color
              }
            ]
          }
      return ( 
        <div className="body">
            <div className="head">
                <br/>
            <h1>MONDAY MORNING SALES REPORT</h1>
            <hr/>
            </div>
            
            <div className="upperPart">
                
            <Bar data={data1st}
            options={{
                height:50,
                weight:50,
            }}
            />
            </div>
        </div>

      );
    }
  }

export default Chart;