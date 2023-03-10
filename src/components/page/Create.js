import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('mario');
    const [isPending , setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title , body , author}
        setIsPending(true);
        fetch('http://localhost:8000/blogs' , {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("Added");
            setIsPending(false);
            history("/");
        })

    }

    return ( 
        <div className='container py-5'>
            <div className="create py-5">
                <h2 className="display-5 align-items-center justify-content-center">Add a New Blog</h2>
                <form onSubmit={handleSubmit} className="py-5">
                    <label>Blog title: </label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Blog body: </label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label>Blog author: </label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="hasan">hasan</option>
                    </select>
                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button disabled>Adding Blog...</button>}
                </form>
            </div>
        </div>
    );
}

export default Create ;