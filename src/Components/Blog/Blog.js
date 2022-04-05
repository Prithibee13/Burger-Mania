import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div className='p-16'>
        <h2 className='text-5xl font-semibold text-center'>A Good Developer must Know</h2>
            <article className='container mb-5 mt-10 '>
                <div className='mb-5'><h3 className='text-4xl font-semibold text-center'>What is Context API?</h3></div>
                <div>
                    <p>
                        When we pass data components to components, we use props in react. If a component depends on data of onther component  , then the dependend component is callded child component. If We use so many child components, we need to use props so many time. So it become hard to trace. And if we need to send a partiular data to a particular component/s We need to send it through all parent components of it. So it can be a case of data breach. So we use contex api. It give a previlage , to send a particular data to particular component avoiding long props drilling and data secuirity.     
                    </p>
                </div>
            </article>

            <article className='container p-10 mb-5 mt-10'>
                <div className="mb-5">
                    <h3 className="text-4xl font-semibold text-center">
                        What is Semantic Tags?
                    </h3>
                </div>

                <div>
                    <p>Semantic tags is intoduced in HTML5. Before HTML5 , all tags call non-semantic tags. This tags non cleraify about it contents. So They intoduce the sementic tags. These tags can clearly define it contents. But none of these tags not give any design advantages without css. </p>
                </div>
            </article>

            <article className='container p-10 mb-5 mt-10'>
                <div className="mb-5">
                    <h3 className="text-4xl font-semibold text-center">
                        
                    </h3>
                </div>
            </article>
        </div>
    );
};

export default Blog;