import React from 'react';

const Home = () => {
    return (
        <div>
        <section>
            <div className="container mt-20 p-10">
            <div className="grid grid-cols-2 gap-10">
                <div className='my-auto'>    
                    <h1 className='text-6xl font-bold mb-5'>Burger Mania</h1>
                    <h2 className='text-5xl font-semibold mb-2'>Deadly Double Daker Smoky Bite</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate animi rem sunt placeat ducimus? Quisquam et quis delectus pariatur quo?</p>
                    <button>Learn More</button>
                </div>
                <div>
                    <img alt="burger" className='rounded w-100' src='https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'></img>
                </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Home;