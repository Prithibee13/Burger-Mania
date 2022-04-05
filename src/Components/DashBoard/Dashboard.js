import React from 'react';
import Areachart from '../../Common/Charts/Areachart';
import Barchart from '../../Common/Charts/Barchart';
import Linechart from '../../Common/Charts/Linechart';
import TotalReview from '../../Common/TotalReview/TotalReview';
import "./Dashbord.css"

const Dashboard = () => {
    return (
        <section className='p-10 mt-20'>
            <div className="container">
                <div className="grid grid-cols-2 gap-10">
                <div className='shadow-lg p-10'>
                    <TotalReview></TotalReview>
                </div>
                    <div className='mb-5 shadow-lg p-10'><Barchart></Barchart></div>
                    <div className='mb-5 shadow-lg p-10'>
                        <Areachart></Areachart>
                    </div>

                    <div className='mb-5 shadow-lg p-10'>
                        
                    <Linechart></Linechart>
                    </div>                    
                </div>

            </div>

           
        </section>
    );
};

export default Dashboard;