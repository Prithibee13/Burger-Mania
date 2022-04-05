import React from 'react';
import { BarChart , Bar , Cell , XAxis , YAxis , CartesianGrid , Tooltip , Legend , ResponsiveContainer } from 'recharts';
import useData from '../../Hooks/useData';



const Barchart = () => 
{

    const [data , setData] = useData();

    return (
        
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#FF5151" />
            <Bar dataKey="revenue" stackId="a" fill="#161E54" />
        </BarChart>  
    );
};

export default Barchart;