 import Chart from 'react-apexcharts'

const CustomerReview = () => {
    const data = {
        series: [
            {
                name:'Review',
                data:[10, 40, 20, 90, 110, 50]
            },
        ],
        options:{
            chart:{
                type: 'area',
                height:'auto',
                stacked:true
            },
            fil:{
                colors:['#fff'],
                type:'gradient',
            },
            dataLabels:{
                enabled:false,
            },
            tooltip:{
                x:{
                    format:'dd/MM/yy HH:mm',
                },
                grid:{
                    show:true
                },
                xaxis:{
                    type:'datetime',
                    categories:[
                        '2023-11-19T00:00:00.000Z',
                        '2023-11-19T01:30:00.000Z',
                        '2023-11-19T02:30:00.000Z',
                        '2023-11-19T03:30:00.000Z',
                        '2023-11-19T04:30:00.000Z',
                        '2023-11-19T05:30:00.000Z',
                        
                    ],
                },
                yaxis:{
                    show:false
                },
                toolbar:{
                    show:false
                },
            }
        }
    }
  return (
    <div className="customer">
      <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview
