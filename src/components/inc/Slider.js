import React from 'react';
import { Link } from 'react-router-dom';
import imageReact from "../images/undraw_static_assets_rpm6 (1).svg";

function Slider() {
    return (
        <section id="hero" className='bg-dark text-light text-center text-sm-start py-4'>
            <div className="container">
                <div className='d-sm-flex align-items-center justify-content-center'>
                    <div className='py-3'>
                        <h1 className='display-5'>Learn <span className='text-info'>React.js</span></h1>
                        <p className='py-1 lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse dicta odio quos velit voluptatem impedit, eaque nemo totam iusto sed. Possimus laborum sapiente deserunt quasi recusandae ducimus et doloremque eos?</p>
                        <Link to="/create"><button className='btn btn-info'>start New Blog</button></Link>
                    </div>
                    <img src={imageReact} className='d-none d-sm-block img-fluid w-50' alt="react" />
                </div>
            </div>
        </section>
    );
}

export default Slider;