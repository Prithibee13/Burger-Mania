import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useData from '../../Hooks/useData';


const Linechart = () => 
{
    const [data , setData] = useData();
    return(
    <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#FF5151" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="revenue" stroke="#161E54" />
        </LineChart>
    );
};

export default Linechart;