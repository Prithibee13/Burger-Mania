import React from 'react';
import StarRating from '../../Common/starRating/StarRating';
import TopReview from '../TopReview/TopReviews';
import Reviews from './Reviews/Reviews';

const Review = () => {
    return (
        <div>
            <section className='p-16'>
                <div className="container mt-20 ">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <img src='https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmV2aWV3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='rev'></img>
                        </div>
                        <div className='my-auto'>
                            <h1 className='text-6xl font-semibold mb-10'>Feedbacks</h1>
                            <p> Feedback is a gift. Ideas are the currency of our next success. Let
                                people see you value both feedback and ideas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-16'>
                <h2 className='text-5xl font-semibold text-center h2'>What our customers Say!</h2>
                <Reviews></Reviews>
            </section>
            
        </div>
    );
};

export default Review;