import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../page/useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blogs , isPending , error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useNavigate();


    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id , {
            method: "DELETE"
        })
        .then(() => {
            history("/blog");
        })
    }

    return ( 
        <div className="container py-5">
            <div className="card">
                <div className="card-body">
                    {isPending && <h1 className='text-center py-5'>Loading...</h1>}
                    {error && <h5 className='text-center py-5 text-danger'>{error}</h5>}
                    {blogs && (
                        <article className="container px-5 mt-5">
                            <h2 className="text-start">{blogs.title}</h2>
                            <p>Written by {blogs.author}</p>
                            <div className="lead">{blogs.body}</div>
                            <div className="py-4">
                                <button onClick={handleClick} className="btn btn-danger">Delete</button>
                            </div>
                        </article>
                        )}
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;