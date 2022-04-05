import React from 'react';
import useReview from '../../../Hooks/useReview';
import ReviewMaker from '../../Review/ReviewMaker/ReviewMaker';

const TopReview = () => 
{
    const [review , setReview] = useReview()
    
    const topReview = review.slice(0,3);
    console.log(topReview);
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {
                   topReview.map(comment => <ReviewMaker key={comment.id}  review={comment}></ReviewMaker>)
               }
            </div> 
        </div>
    );
};

export default TopReview;