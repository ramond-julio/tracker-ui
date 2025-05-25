import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { listsTransactionAPI } from "../../services/transactions/transactionsServices";

ChartJS.register(ArcElement, Tooltip, Legend);


const TransactionChart = () => {
  //Fetch Data Transactions
  const {data, isError, isFetched, isLoading,error, refetch} = useQuery({
    queryFn: listsTransactionAPI,
    queryKey: ['list-transactions']
  });

  //Calculate total expenses
  const totals = data?.reduce((acc, data)=>{
    if(data?.type==='income'){
      acc.income += data?.amount;
    } else {
      acc.expense += data?.amount;
    }
    return acc;
  },{income:0,expense:0})
  //Data Structure for chart
  const dataChart = {
    labels: ['Income','Expense'],
    datasets:[{
      label:'Transactions',
      data:[totals?.income, totals?.expense],
      backgroundColor: ['#36A2EB', '#FF6384'],
      borderColor: ['#36A2EB', '#FF6384'],
      borderWidth: 1,
      hoverOffset: 4
    }]
  }
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position:'bottom',
        labels:{
          padding: 25,
          boxWidth: 12,
          font: {
            size: 14,
          }
        }
      },
      title:{
        display: true,
        text: "Income vs Expense",
        font: {
          size: 188,
          weight: 'bold'
        },
        padding:{
          top:10,
          bottom:30
        }
      }
    },
    cutout: '70%'
  }
  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6">
        Transaction Overview
      </h1>
      <div style={{ height: "350px" }}>
        <Doughnut data={dataChart} options={options} />
      </div>
    </div>
  );
};

export default TransactionChart;
