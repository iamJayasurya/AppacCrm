import React from 'react'
import { Chart as Chartjs,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ArcElement} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import {Doughnut} from 'react-chartjs-2'



function Chart() {
  Chartjs.register(
    CategoryScale
    ,LinearScale,
    BarElement,ArcElement,
    Title,Tooltip,Legend
)

const options={
    responsive:true,
    transition:'0.3s' ,
    plugins:{
        legend:{
            position:'top',
        },
        Title:{
            display:true,
            text:'Demo Chart',
        },
    }
}

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [60, 60, 60       ],
      backgroundColor: [
        'rgb(0 172 193)',
        'rgb(54, 162, 235)',
        'rgb(74 139 194)'
      ],
      hoverOffset: 4
    }]
  };

const data1={
    labels:['jan','feb','mar'],
    datasets:[
        {
            label1:'present',
            data:[12,32,56],
            backgroundColor:'#00a6c0',
        },
        {
            label2:'absent',
            data:[33,11,80],
            backgroundColor:'rgb(54, 162, 235)',

        }
    ]
}
  return (
    <div className='chart-wrp'>
    <Bar options={options} className='bargraph' data={data1} id='1'>    <p>Hello Fallback World</p></Bar>
    <Doughnut width={'50%'} options={options}  data={data}/>
    </div>
  )
}

export default Chart