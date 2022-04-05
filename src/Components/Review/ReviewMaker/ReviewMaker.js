import React from 'react';

const ReviewMaker = (props) => 
{
    const { review } = props;

    const { name , comment , img , rating} = review
    return (
        <div className='mb-5 p-10'>
            <article>
                <img  className=' mb-5 mx-auto' src={img} alt="pic" />
                <p className='text-2xl mb-5'>{comment}</p>
                <h3 className='text-4xl font-semibold mb-5'>{name}</h3>
                <p className='mb-5 text-2xl'>Ratings : {rating}/5.00</p>
            </article>
        </div>
    );
};

export default ReviewMaker;