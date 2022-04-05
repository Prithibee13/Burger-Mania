import React from 'react';
import useReview from '../../../Hooks/useReview';
import ReviewMaker from '../ReviewMaker/ReviewMaker';

const Reviews = () =>
{
    const [review , setReview] = useReview()  
    return (
        <div>
            <div className="container mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        review.map(comment => <ReviewMaker key={comment.id} review = {comment}></ReviewMaker>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;