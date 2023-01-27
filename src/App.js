import React from 'react';
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Navbar from './components/inc/Navbar';
import Footer from "./components/inc/Footer";
import Create from './components/page/Create';
import BlogDetails from './components/inc/BlogDetails';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import NotFound from './components/inc/NotFound';
const LoadingBlog = React.lazy(() => import("./components/page/Blog"));

function App() {
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blog" element={<React.Suspense fallback="Loading..."><LoadingBlog /></React.Suspense>}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/blog/:id" element={<BlogDetails />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;