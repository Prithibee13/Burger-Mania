import React from 'react';
import useData from '../../Hooks/useData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Areachart = () => 
{
    const [data , setData] = useData();
    return (
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#FF5151" fill="#FF5151" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#161E54" fill="#161E54" />
        </AreaChart>
    );
};

export default Areachart;