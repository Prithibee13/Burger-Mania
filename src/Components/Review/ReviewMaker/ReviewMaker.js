import React from 'react';

const ReviewMaker = (props) => 
{
    const { review } = props;

    const { name , comment , img , rating} = review
    return (
        <div className='mb-5 p-10 shadow-xl'>
            <article>
                
                <img  className=' mb-5 mx-auto rounded-full' src={img} alt="pic" />
                
                <p className='mb-5 text-2xl'><small>Ratings : {rating}/5.00</small> </p>
                <p className='text-2xl mb-5'>{comment}</p>
                <h3 className='text-4xl font-semibold mb-5'>{name}</h3>
            </article>
        </div>
    );
};

export default ReviewMaker;