import { comment } from 'postcss';
import React from 'react';
import useReview from '../../Hooks/useReview';

const TotalReview = () => 
{
    const [review , setReview] = useReview();
    const length = review.length;
    let sum = 0;
    
    const newReview = [...review]
    newReview.forEach(comment =>
        {
            sum = sum + comment.rating;

        })
    const avarageRating = parseFloat(sum/length)

    return (
        <div className='my-auto'>
            <h3 className='text-4xl font-semibold mb-10'>Total Review : {length}</h3>
            <h4 className='text-3xl font-semibold'>Avarage Rating : {avarageRating}</h4>
        </div>
    );
};

export default TotalReview;