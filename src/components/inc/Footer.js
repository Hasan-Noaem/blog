import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className='section footer bg-dark text-light'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloremque quasi ipsa, placeat sapiente illum perferendis enim voluptatem reiciendis minima nam obcaecati, quo a est facilis soluta cupiditate? Enim quisquam maxime blanditiis cupiditate autem natus modi ut fugiat esse.</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link className='a' to="/">Home</Link></div>
                        <div><Link className='a' to="/about">about</Link></div>
                        <div><Link className='a' to="/contact">Contact</Link></div>
                        <div><Link className='a' to="/blog">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className='text-light mb-1'>Azaqa,Jordan</p></div>
                        <div><p className='text-light mb-1'>+962 786004792</p></div>
                        <div><p className='text-light mb-1'>07 86004792</p></div>
                        <div><p className='text-light mb-1'>wildingpipes@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;