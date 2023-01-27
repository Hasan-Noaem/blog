import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="container py-5 text-center">
            <h2>That Page Cannot be Found</h2>
            <Link to="/"><button className="btn btn-warning">Back To Home</button></Link>
        </div>
    );
}

export default NotFound;