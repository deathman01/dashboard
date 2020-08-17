import React, {Component} from 'react';
import './cssfile.css';
import {Bar, Line, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
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
                timeBetweenLastTwoPurchase: 5,
            },
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 120,
                newOrderValue : 300,
                visitBeforePurchase: 1,
                orderValue : 420,
                timeBetweenLastTwoPurchase: 6,
            },
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 200,
                newOrderValue : 250,
                visitBeforePurchase: 2,
                orderValue : 450,
                timeBetweenLastTwoPurchase: 7,
            },
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 600,
                newOrderValue : 300,
                visitBeforePurchase: 1 ,
                orderValue : 900,
                timeBetweenLastTwoPurchase: 15,
            },
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 600,
                visitBeforePurchase: 3,
                orderValue : 700,
                timeBetweenLastTwoPurchase: 33,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 1000,
                newOrderValue : 200,
                visitBeforePurchase: 1,
                orderValue : 1200,
                timeBetweenLastTwoPurchase: 25,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 300,
                visitBeforePurchase: 2,
                orderValue : 400,
                timeBetweenLastTwoPurchase: 5,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 100,
                visitBeforePurchase: 2,
                orderValue : 200,
                timeBetweenLastTwoPurchase: 1,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 200,
                newOrderValue : 200,
                visitBeforePurchase: 3,
                orderValue : 400,
                timeBetweenLastTwoPurchase: 12,
            },
            {
                new: false,
                old: true,
                newOrder: 21,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 1,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 4,
            },
            {
                new: true,
                old: false,
                newOrder: 1,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 1,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 5,
            },
            {
                new: true,
                old: false,
                newOrder: 15,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 1,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 5,
            },
            {
                new: false,
                old: true,
                newOrder: 4,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 3,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 31,
            },
            {
                new: true,
                old: false,
                newOrder: 23,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 1,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 5,
            },
            {
                new: true,
                old: false,
                newOrder: 16,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 1,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 5,
            },
            {
                new: false,
                old: true,
                newOrder: 5,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 1,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 50,
            },
            {
                new: true,
                old: false,
                newOrder: 12,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 2,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 5,
            },
            {
                new: false,
                old: true,
                newOrder: 20,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 3,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 5,
            },
            {
                new: true,
                old: false,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 2,
                orderValue : 300,
                timeBetweenLastTwoPurchase: 5,
            },
            {
                new: false,
                old: true,
                newOrder: 10,  //no of order
                repeatOrderValue: 100,
                newOrderValue : 200,
                visitBeforePurchase: 2,
                orderValue : 600,
                timeBetweenLastTwoPurchase: 5,
            },
        ]});
    }
    render() {
        const dataSet = this.state.dataSet;
        var totalOrder=0;
        var totalSale=0;
        var totalOrderNew=0;
        var totalOrderOld=0;
        var totalOrderNewVal=0;
        var totalOrderOldVal=0;
        var v1=0,v2=0,v3=0;
        var lessW=0,betW=0,grtMo=0;

        for(let i=0;i<dataSet.length; i++){
            if(dataSet[i].new === true){
                totalOrderNew+=dataSet[i].newOrder;
                totalOrderNewVal+=dataSet[i].orderValue;
                if(dataSet[i].visitBeforePurchase === 1){
                    v1+=1;
                }else if(dataSet[i].visitBeforePurchase === 2){
                    v2+=1;
                }else{
                    v3+=1;
                }
            }else{
                totalOrderOld+=dataSet[i].newOrder;
                totalOrderOldVal+=dataSet[i].orderValue;
                if(dataSet[i].timeBetweenLastTwoPurchase < 7){
                    lessW+=1;
                }else if(dataSet[i].timeBetweenLastTwoPurchase >= 7 && dataSet[i].timeBetweenLastTwoPurchase <=30){
                    betW+=1;
                }else{
                    grtMo+=1;
                }
            }
            totalOrder+=dataSet[i].newOrder;
            totalSale+= dataSet[i].orderValue;
            //console.log(this.totalOrderOldVal);
        }
        totalOrderNew=Math.round((totalOrderNew*100)/totalOrder);
        totalOrderOld=Math.round((totalOrderOld*100)/totalOrder);
        totalOrderNewVal=Math.round((totalOrderNewVal*100)/totalSale);
        totalOrderOldVal=Math.round((totalOrderOldVal*100)/totalSale);

        const data1st = {   
            labels: [
              '%New', '%Repeat'
            ],
            datasets: [
              {
                label: 'Totalsale %',
                data: [totalOrderNew,totalOrderOld,0,70],
                backgroundColor:[
                    'rgba(255,19,20,0.6)',
                    'rgba(55,199,55,0.6)',
                ]
              }
            ]
          }
          const data2st = {
            labels: [
              '%New', '%Repeat'
            ],
            datasets: [
              {
                label: 'TotalOrder %',
                data: [totalOrderNewVal,totalOrderOldVal,0,70],
                backgroundColor:[
                    'rgba(255,190,20,0.6)',
                    'rgba(55,199,55,0.6)',
                ]
              }
            ]
          }
          const data3st = {
            labels: [
              '1', '2','3'
            ],
            datasets: [
              {
                label: 'Visits Before Purchase',
                data: [v1,v2,v3,0,8],
                backgroundColor:[
                    'rgba(255,190,20,0.6)',
                    'rgba(55,199,55,0.6)',
                    'rgba(55,199,255,0.6)',
                ]
              }
            ]
          }
          const data4st = {
            labels: [
              '<1Week', '1weak-1Mo','>1MO'
            ],
            datasets: [
              {
                label: 'Time Between Two Purchase',
                data: [lessW,betW,grtMo,0,8],
                backgroundColor:[
                    'rgba(255,190,20,0.6)',
                    'rgba(55,199,55,0.6)',
                    'rgba(55,199,255,0.6)',
                ]
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
            <div className="dowmHead">
                <div className="leftBar">
                    <div className="leftBarData">data</div>
                    <div class="vl"></div>
                </div>
                <div className="rightBar">
                <div className="tabl">
                <div><h1></h1></div>
                <div className="left">
                    <Bar data={data1st}
                        options={{
                            responsive: true,   
                            maintainAspectRatio:false,
                            title: {
                                display: true,
                                text: 'Total Order:'+totalOrder,
                                fontSize: 20,
                            },
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                                }],
                                yAxes: [{
                                    ticks: { display: false },
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                                }]
                             },
                             plugins: {
                                datalabels: {
                                   display: true,
                                   color: 'black',
                                   align: 'end'
                                }
                             }
                     }}
                    />
                </div>
                <div classname="right">
                    <Bar data={data2st}
                        options={{
                            responsive: true,   
                            maintainAspectRatio:false,
                            title: {
                                display: true,
                                text: 'Total Sale: $'+totalSale,
                                fontSize: 20,
                            },
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    },
                                    
                                }],
                                yAxes: [{
                                    ticks: { display: false },
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                                }]
                             }
                     }}
                     />
             </div>
            </div>
            <br/>
            <div className="tab2">
                <div><h1></h1></div>
                
                <div className="downLeft">
                    <Bar data={data3st}
                        options={{
                            responsive: true,   
                            maintainAspectRatio:false,
                            title: {
                                display: true,
                                text: 'New Costoumer Insights',
                                fontSize: 20,
                            },
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                                }],
                                yAxes: [{
                                    ticks: { display: true },
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                                }]
                             },
                             plugins: {
                                datalabels: {
                                   display: false,
                                   color: 'black',
                                   align: 'end'
                                }
                             }
                     }}
                    />
                </div>
                <div>
                    <Bar data={data4st}
                        options={{
                            responsive: true,   
                            maintainAspectRatio:false,
                            title: {
                                display: true,
                                text: 'Repeat Costoumer Insights',
                                fontSize: 20,
                            },
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                                }],
                                yAxes: [{
                                    ticks: { display: true },
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                                }]
                             },
                             plugins: {
                                datalabels: {
                                   display: false,
                                   color: 'black',
                                   align: 'end'
                                }
                             }
                     }}
                     />
             </div>
            </div>
                </div>
            </div>
        </div>

      );
    }
  }

export default Chart;