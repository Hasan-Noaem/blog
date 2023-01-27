import React from 'react';
import BlogList from '../inc/BlogList';
import Slider from '../inc/Slider';
import useFetch from './useFetch';

function Home({title}) {
    const {data: blogs , isPending , error} = useFetch("http://localhost:8000/blogs");

    return (
    <div >
        <Slider />
        {error && <h5 className='text-center py-5 text-danger'>{error}</h5>}
        {isPending && <h1 className='text-center py-5'>Loading...</h1>}
        {blogs && <BlogList blogs={blogs} title="Posts" />}
    </div>
    );
}

export default Home;