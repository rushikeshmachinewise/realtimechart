import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import axios from 'axios';

function randomNum() {
  return Math.floor(Math.random() * 90) + 1;
}

function generateNewdata() {
  return [
    { name: 'Facebook', value: randomNum(), fill: '#059669' },
    { name: 'Instagram', value: randomNum(), fill: '#B91C1C' },
    { name: 'Twitter', value: randomNum(), fill: '#6366F1' },
    { name: 'Telegram', value: randomNum(), fill: '#D97706' },
  ];
}

export default function Charts() {
  const [data, setData] = useState([
    { name: 'Facebook', value: 0, fill: '#059669' },
    { name: 'Instagram', value: 0, fill: '#B91C1C' },
    { name: 'Twitter', value: 0, fill: '#6366F1' },
    { name: 'Telegram', value: 0, fill: '#D97706' },
  ]);
  const [datasend, setDatasend] = useState([{name : String,
    value : Number}]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const data = generateNewdata();

      setData(data);

      axios.post('http://localhost:5000/api/sendrealchart', data);

    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
      const datasend = generateNewdata();

      setDatasend(datasend);

      axios.post('http://localhost:5000/api/sendrealchart2', datasend);

    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mainclass">
      <div className="chart">
        <h1>Chart</h1>
        <PieChart width={550} height={350}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label />
          <Tooltip />
        </PieChart>
      </div>
      <div className="secondchart">
        <div className="workouts">
          <table className="table text-center offset-1 border" style={{ marginTop: "50px", width: "80%" }}>
            <thead className="table-dark" >
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody className="table-light">
              {
                data.map(data => (
                  <tr key={data.name}>
                    <td>{data.name}</td>
                    <td>{data.value}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
