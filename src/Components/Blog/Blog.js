import React from 'react';

const Blog = () => {
    return (
        <div>
        <h2 className='text-5xl font-semibold text-center'>A Good Developer must Know</h2>
            <article>
                <div><h3 className='text-4xl font-semibold text-center'>What is Context API?</h3></div>
                <div>
                    <p>
                        When we pass data components to components, we use props in react. If a component depends on data of onther component  , then the dependend component is callded child component. If We use so many child components, we need to use props so many time. So it become hard to trace. And if we need to send a partiular data to a particular component/s We need to send it through all parent components of it. So it can be a case of data breach. So we use contex api. It give a previlage , to send a particular data to particular component avoiding log props drilling and data secuirity.     
                    </p>
                </div>
            </article>

            <article>
                
            </article>
        </div>
    );
};

export default Blog;