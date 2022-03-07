import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {

    const data = [
  {
    name: 'Jan',
    "Active User": 4000,
  },
  {
    name: 'Feb',
    "Active User": 3000,
  },
  {
    name: 'Mar',
    "Active User": 2000,
  },
  {
    name: 'Apr',
    "Active User": 2780,
  },
  {
    name: 'May',
    "Active User": 1890,
  },
  {
    name: 'Jun',
    "Active User": 2390,
  },
  {
    name: 'Jul',
    "Active User": 4090,
  },
  {
    name: 'JAug',
    "Active User": 5390,
  },
  {
    name: 'Sep',
    "Active User": 2290,
  },
  {
    name: 'Oct',
    "Active User": 3000,
  },
  {
    name: 'Nov',
    "Active User": 2590,
  },
  {
    name: 'Dec',
    "Active User": 3490,
  },
];
  return (
    <div className="chart">
         <h3 className="chartTitle">User Analytics</h3>
         <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotone" dataKey="Active User" />
            <Tooltip/>
            <CartesianGrid/>
            </LineChart>

         </ResponsiveContainer>
    </div>
  )
}

export default Chart