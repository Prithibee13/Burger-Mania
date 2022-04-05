import React from 'react';
import Areachart from '../../Common/Charts/Areachart';
import Barchart from '../../Common/Charts/Barchart';
import Linechart from '../../Common/Charts/Linechart';
import "./Dashbord.css"

const Dashboard = () => {
    return (
        <section className='p-10'>
            <div className="container">
                <div className="grid grid-cols-2 gap-10">
                    <div className='mb-5'><Barchart></Barchart></div>
                    <div className='mb-5'>
                        <Areachart></Areachart>
                    </div>

                    <div className='mb-5'>
                        
                    <Linechart></Linechart>
                    </div>                    
                </div>

            </div>

           
        </section>
    );
};

export default Dashboard;