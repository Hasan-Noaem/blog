import { Link } from "react-router-dom";
import image from "../images/pexels-h-emre-773471.jpg";

const BlogList = ({blogs , title}) => {

    return ( 
        <div className="py-5 text-center ">
            {<h2 className="text-center mb-5">{title}</h2>}
            {blogs.map((blog) => (
                <div className="d-inline-block" key={blog.id}>
                    <div className="container px-4">
                        <div className="row text-center py-3">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card" style={{width: "24rem"}}>
                                <img src={image} className="card-img-top" alt="..."/>                                    
                                    <div className="card-body">
                                        <Link to={`/blog/${blog.id}`}>
                                            <h2 className="card-title">{blog.title}</h2>
                                            <p className="card-text">{blog.author}</p>
                                        </Link>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;