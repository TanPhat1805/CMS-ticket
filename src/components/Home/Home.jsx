import React, {useState} from "react";
import { DatePicker, Space } from "antd";
import { Line, Doughnut } from "react-chartjs-2";
import "../css/Header.css"
import "../Home/Menu.scss"


import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default function Home() {

  const [data] = useState({
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
    datasets: [ 
      {
        data: [144, 144, 150, 150, 150, 140, 160,], 
        backgroundColor: 'rgba(250, 160, 95, 0.16)',
        borderColor: 'rgba(255, 138, 72, 1)',
        tension: .6,
        fill: true,
      }
  
    ]
  })
          const data1 = {
            labels: ["56024 ", "13568"],
            datasets: [
              {
                label: "# of Votes",
                data: [56024, 13568],
                backgroundColor: ["#4F75FF", "#FF8A48"],
                borderWidth: 1,
              },
            ],
          };
          const data2 = {
            labels: ["30256 ", "28302"],
            datasets: [
              {
                label: "# of Votes",
                data: [30256, 28302],
                backgroundColor: ["#4F75FF", "#FF8A48"],
                borderWidth: 1,
              },
            ],
          };

  return (
    <div className="Content">
      <h1>Thống kê</h1>
      <h2>Doanh thu</h2>

      <Space direction="vetical">
        <DatePicker className="date-picker customdate" onChange={onChange} />
      </Space>
      <div className="chart">
        <Line
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      </div>
      <p className="Content__wapper">Tổng doanh thu theo tuần</p>
      <p className="Sub__content">
        <span>525.145.000</span> đồng
      </p>
      <Space direction="vertical">
        <DatePicker className="date-picker2" onChange={onChange} />
      </Space>
      <div className="donut__chart">
        <div className="donut__chart-element">
          <Doughnut data={data1} />
        </div>
        <div className="donut__chart-element">
          <Doughnut data={data2} />
        </div>

        <div className="status_dunut">
          <div className="color-box">
            <div className="color"></div>
            <span>Vé đã sử dụng</span>
          </div>
          <div className="color-box">
            <div className="color last"></div>
            <span>Vé chưa sử dụng</span>
          </div>
        </div>
      </div>
    </div>
  );
}
