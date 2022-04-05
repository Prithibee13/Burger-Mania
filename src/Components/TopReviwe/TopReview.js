import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewMaker from '../Review/ReviewMaker/ReviewMaker';

const TopReview = () => 
{
    const [review , setReview] = useReview()
    const topReview = review.filter(review => review.rating === 5.00 )
    setReview(topReview)
    return (
        <div>
            
            <div className="container">
                <div className="grid grid-cols-3 gap-5">
                    {
                        review.map(review => <ReviewMaker key={review.id} review ={review}></ReviewMaker>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopReview;