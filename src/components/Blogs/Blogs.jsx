import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="md:w-3/4">
            <h1>{blogs.length}</h1>
        </div>
    );
};

export default Blogs;