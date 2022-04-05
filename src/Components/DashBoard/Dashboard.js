import React from 'react';
import Areachart from '../../Common/Charts/Areachart';
import Barchart from '../../Common/Charts/Barchart';
import Linechart from '../../Common/Charts/Linechart';
import TotalReview from '../../Common/TotalReview/TotalReview';
import "./Dashbord.css"

const Dashboard = () => {
    return (
        <section className='p-16 mt-20'>
            <div className="container">
                <div className="grid grid-cols-2 gap-10">
                <div className='shadow-lg p-10 mb-5 text-center'>
                <h3 className='text-4xl mb-5'>Total Review and avarage rating </h3>
                    <TotalReview></TotalReview>
                </div>
                    <div className='mb-5 shadow-lg p-10'>
                    <h3 className='text-4xl mb-5'>INVESTMENT VS. REVENUE</h3>
                    <Barchart></Barchart>
                    </div>
                    <div className='mb-5 shadow-lg p-10'>
                        <h3 className='text-4xl mb-5'>INVESTMENT VS. REVENUE</h3>
                        <Areachart></Areachart>
                    </div>

                    <div className='mb-5 shadow-lg p-10'>
                        <h3 className='text-4xl mb-5'>MONTH WISE SELL</h3>                        
                    <Linechart></Linechart>
                    </div>                    
                </div>

            </div>

           
        </section>
    );
};

export default Dashboard;